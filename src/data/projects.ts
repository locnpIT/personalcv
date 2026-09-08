import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "rate-limiter",
    title: "Distributed API Rate Limiting",
    tagline: "Atomic sliding-window rate limiter powered by Redis and Lua",
    tech: ["Java", "Spring Boot", "Redis", "Lua", "Docker"],
    description:
      "Designed API rate limiting using Redis and Lua scripts to protect backend services from abuse while maintaining atomic behavior across multiple backend instances.",
    highlightMetric: "Sub-millisecond latency & zero race conditions",
    problem:
      "Under high-frequency traffic and distributed multi-pod deployments, naive rate-limiting implementations (e.g. GET then SET in application memory or non-atomic Redis operations) suffer from race conditions, time-of-check to time-of-use (TOCTOU) bugs, and excessive network round-trips.",
    solution:
      "Implemented a centralized sliding-window counter using Redis and embedded Lua scripts executed directly on the Redis engine. By bundling token checking and quota incrementing into a single atomic script, race conditions between concurrent application nodes were eliminated with single-round-trip performance.",
    architectureDetails: [
      "Client requests hit Spring Boot HTTP interceptor / filter layer.",
      "Filter extracts client identity (API key / IP / User ID) and forwards parameters to Redis.",
      "Redis runs an atomic Lua script that removes timestamps older than the window, calculates current request count, and evaluates whether quota is exceeded.",
      "If allowed, the request timestamp is inserted into the sorted set with automatic TTL expiration; if exceeded, HTTP 429 Too Many Requests is returned immediately.",
    ],
    technicalHighlights: [
      {
        title: "Atomic Lua Execution",
        description:
          "Executing Redis EVAL ensures the check-and-update sequence runs single-threaded without requiring distributed lock contention.",
      },
      {
        title: "Sliding Window Algorithm",
        description:
          "Avoids burst vulnerabilities at window boundaries typical of fixed-window counters.",
      },
      {
        title: "Resilient Fallback",
        description:
          "Configured fail-open strategy with circuit breaker pattern if Redis connectivity experiences degradation, prioritizing service uptime.",
      },
    ],
    codeSnippet: {
      language: "lua",
      filename: "rate_limiter.lua",
      code: `-- Atomic Sliding Window Rate Limiter in Redis Lua
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local limit = tonumber(ARGV[3])
local clearBefore = now - window

-- Remove outdated timestamps outside the active sliding window
redis.call('ZREMRANGEBYSCORE', key, 0, clearBefore)

-- Count requests within current window
local currentRequests = redis.call('ZCARD', key)

if currentRequests < limit then
    -- Record current request timestamp
    redis.call('ZADD', key, now, now)
    redis.call('EXPIRE', key, math.ceil(window / 1000))
    return 1 -- Allowed
else
    return 0 -- Rejected (Rate Limit Exceeded)
end`,
    },
    results: [
      "Guaranteed atomic rate-limiting checks across multiple horizontally scaled Spring Boot instances.",
      "Kept Redis round-trip latency under 1ms per rate-limit check.",
      "Eliminated boundary burst issues and protected downstream SQL databases from traffic spikes.",
    ],
    futureConsiderations: [
      "Integration of Token Bucket algorithm for smoother burst traffic handling.",
      "Dynamic tier-based rate limit quotas configured via Redis Hash tables.",
    ],
  },
  {
    slug: "hotword-search",
    title: "Hotword Search System",
    tagline: "Real-time trending search tracking with Redis Sorted Sets",
    tech: ["Java", "Spring Boot", "Redis Sorted Set", "REST APIs"],
    description:
      "Built a real-time trending search system using Redis Sorted Sets for keyword ranking and hotword tracking.",
    highlightMetric: "O(log N) top-k rankings with real-time score updates",
    problem:
      "Calculating trending search terms directly against relational databases creates severe I/O bottlenecks and locking contention during traffic surges. Traditional batch computation approaches (like cron jobs running every 30 minutes) fail to reflect immediate breaking trends.",
    solution:
      "Engineered an in-memory ranking pipeline utilizing Redis Sorted Sets (`ZSET`). Search terms are ingested asynchronously, their scores are incremented atomically via `ZINCRBY`, and top-k trending keywords are retrieved with high efficiency using `ZREVRANGE`.",
    architectureDetails: [
      "Search requests asynchronously dispatch keyword events to the trending service.",
      "Keywords are normalized (trimmed, lowercased, stop-words removed).",
      "Redis ZSET tracks daily and hourly buckets with automatic TTL expiry to prevent memory bloat.",
      "Cache-aside pattern serves Top 10/20 trending hotwords with a short local memory cache to absorb extreme read spikes.",
    ],
    technicalHighlights: [
      {
        title: "Redis ZSET Data Structure",
        description:
          "Leverages skip list & hash map internals of Redis ZSET for O(log N) insertion, update, and ranked range retrieval.",
      },
      {
        title: "Time-Decay Scoring",
        description:
          "Implemented rolling time buckets (hourly/daily) so older queries naturally phase out and recent breaking queries rise quickly.",
      },
      {
        title: "Asynchronous Keyword Ingestion",
        description:
          "Decoupled search execution from trending metrics recording to ensure zero user-facing latency penalty.",
      },
    ],
    codeSnippet: {
      language: "java",
      filename: "HotwordService.java",
      code: `@Service
public class HotwordService {

    private final StringRedisTemplate redisTemplate;
    private static final String HOTWORD_KEY_PREFIX = "hotwords:daily:";

    public HotwordService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void recordKeywordSearch(String keyword) {
        if (keyword == null || keyword.isBlank()) return;
        String normalized = keyword.trim().toLowerCase();
        String currentKey = HOTWORD_KEY_PREFIX + LocalDate.now();

        // Increment score by 1 atomically (O(log N))
        redisTemplate.opsForZSet().incrementScore(currentKey, normalized, 1.0);
        redisTemplate.expire(currentKey, Duration.ofDays(7));
    }

    public List<TypedTuple<String>> getTopHotwords(int limit) {
        String currentKey = HOTWORD_KEY_PREFIX + LocalDate.now();
        Set<TypedTuple<String>> results = 
            redisTemplate.opsForZSet().reverseRangeWithScores(currentKey, 0, limit - 1);
        return results != null ? new ArrayList<>(results) : List.of();
    }
}`,
    },
    results: [
      "Sub-2ms response time for top hotword API queries under heavy concurrent reads.",
      "Completely offloaded trending query calculation from primary relational database.",
      "Real-time visibility into emerging user search patterns.",
    ],
    futureConsiderations: [
      "Exponential decay scoring algorithm for smoother continuous time-weighted rankings.",
      "Bloom filter pre-filtering to prevent low-frequency junk keywords from consuming Redis memory.",
    ],
  },
  {
    slug: "reservation-system",
    title: "Restaurant Reservation System",
    tagline: "Concurrency control & race condition prevention with MySQL row-level locking",
    tech: ["Java", "Spring Boot", "MySQL", "JPA / Hibernate", "Transactions"],
    description:
      "Prevented double bookings by handling race conditions using MySQL row-level locking.",
    highlightMetric: "Zero double-booking guarantee under concurrent spikes",
    problem:
      "In high-demand dining reservation windows, multiple users attempt to book the exact same table/time slot simultaneously. Standard application-level read-then-write checks fail in concurrent environments, resulting in catastrophic double-booking incidents and data inconsistency.",
    solution:
      "Implemented strict database-level concurrency control using MySQL row-level pessimistic locking (`SELECT ... FOR UPDATE`) within isolated database transactions. Combined with unique constraint safeguards and idempotent reservation tokens, duplicate bookings are mathematically impossible.",
    architectureDetails: [
      "User submits reservation request with table ID, time slot, and client idempotency key.",
      "Spring Boot initiates `@Transactional` boundary with explicit isolation level.",
      "Acquires pessimistic lock on the target inventory slot via `SELECT ... FOR UPDATE`.",
      "Checks reservation status: if available, transitions status to `RESERVED` and commits transaction; if already locked/taken, rolls back and returns clear conflict status.",
      "Lock is released immediately upon transaction commit or rollback.",
    ],
    technicalHighlights: [
      {
        title: "Pessimistic Row-Level Locking",
        description:
          "Guarantees exclusive access to specific time-slot rows without locking unrelated tables or neighboring rows.",
      },
      {
        title: "Short Transaction Boundaries",
        description:
          "Kept database transaction windows minimal to prevent connection pool exhaustion and lock timeout spikes.",
      },
      {
        title: "Database-Level Unique Constraints",
        description:
          "Added composite unique index `(table_id, reservation_date, time_slot)` as a secondary fail-safe invariant.",
      },
    ],
    codeSnippet: {
      language: "java",
      filename: "ReservationRepository.java",
      code: `@Repository
public interface TableSlotRepository extends JpaRepository<TableSlot, Long> {

    /**
     * Acquires exclusive row-level lock (SELECT ... FOR UPDATE)
     * Blocks concurrent transactions until current transaction finishes.
     */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @QueryHints({@QueryHint(name = "jakarta.persistence.lock.timeout", value = "3000")})
    @Query("SELECT s FROM TableSlot s WHERE s.id = :slotId AND s.status = 'AVAILABLE'")
    Optional<TableSlot> findAvailableSlotForUpdate(@Param("slotId") Long slotId);
}`,
    },
    results: [
      "100% prevention of double-booking under concurrent automated load testing.",
      "Clean fail-fast error handling with proper HTTP 409 Conflict status codes.",
      "Predictable transaction latency with 3-second timeout protection against deadlocks.",
    ],
    futureConsiderations: [
      "Optimistic locking (`@Version`) evaluation for low-contention scenarios to improve read throughput.",
      "Redis distributed lock (Redlock) integration if scaling beyond a single MySQL primary instance.",
    ],
  },
  {
    slug: "database-optimization",
    title: "Database Performance Optimization",
    tagline: "Query tuning & composite indexing: ~13s to ~100ms response time",
    tech: ["MySQL", "SQL", "Indexing", "Query Execution Plans", "Database Tuning"],
    description:
      "Optimized a slow API query from approximately 13 seconds to approximately 100 milliseconds through indexing and query restructuring.",
    highlightMetric: "~13s → ~100ms latency reduction (99% improvement)",
    problem:
      "A core reporting and filtering API query suffered from degraded execution time (~13 seconds) as table sizes grew. Analysis revealed full table scans across millions of rows, temporary filesort operations on disk, and unindexed multi-table JOINs.",
    solution:
      "Analyzed the query using MySQL `EXPLAIN FORMAT=JSON` to identify cost bottlenecks. Restructured redundant subqueries, added targeted composite covering indexes aligned with the WHERE and ORDER BY clauses, and eliminated unneeded columns from the SELECT list.",
    architectureDetails: [
      "Inspected slow query logs and identified high-frequency filtering bottlenecks.",
      "Executed `EXPLAIN ANALYZE` to quantify row examination volume and temporary table creation.",
      "Constructed composite index following leftmost prefix rule `(tenant_id, status, created_at)`.",
      "Refactored query from correlated subquery to indexed `JOIN` with selective filtering applied early.",
    ],
    technicalHighlights: [
      {
        title: "Covering Index Utilization",
        description:
          "Allowed the MySQL InnoDB engine to fulfill queries directly from the B-Tree index structure without secondary disk lookups (`Using index`).",
      },
      {
        title: "Eliminating Using filesort",
        description:
          "Aligned composite index sort order with the query `ORDER BY` clause, removing in-memory and disk-based sorting operations.",
      },
      {
        title: "Execution Plan Verification",
        description:
          "Reduced examined rows from over 1.2M rows down to only matching index entries (~450 rows).",
      },
    ],
    codeSnippet: {
      language: "sql",
      filename: "optimization_plan.sql",
      code: `-- Before Optimization: Full Table Scan (~13.2s)
-- EXPLAIN: type=ALL, rows=1250000, Extra=Using where; Using filesort
SELECT o.id, o.order_number, o.total_amount, o.status, o.created_at
FROM orders o
WHERE o.tenant_id = 1042 AND o.status = 'COMPLETED'
ORDER BY o.created_at DESC
LIMIT 50;

-- Optimization Step 1: Create tailored composite covering index
CREATE INDEX idx_orders_tenant_status_created
ON orders (tenant_id, status, created_at DESC);

-- After Optimization: Index Range Scan (~98ms)
-- EXPLAIN: type=ref, key=idx_orders_tenant_status_created, rows=50, Extra=Using index condition`,
    },
    results: [
      "Reduced API query latency from ~13.2 seconds down to ~100 milliseconds.",
      "Reduced database CPU utilization during peak reporting hours by over 60%.",
      "Eliminated query timeout errors on high-volume tenant accounts.",
    ],
    futureConsiderations: [
      "Partitioning strategy by date range for historical records older than 2 years.",
      "Automated slow query monitoring alerts for queries exceeding 200ms threshold.",
    ],
  },
];
