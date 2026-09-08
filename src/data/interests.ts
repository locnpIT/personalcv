export interface EngineeringInterest {
  title: string;
  category: string;
  description: string;
  keyConcepts: string[];
}

export const engineeringInterests: EngineeringInterest[] = [
  {
    title: "Distributed Systems",
    category: "Architecture",
    description: "Consensus protocols, CAP theorem trade-offs, fault tolerance, and data replication across cluster nodes.",
    keyConcepts: ["Data Replication", "Partitioning", "Idempotency", "Fault Tolerance"],
  },
  {
    title: "Redis & In-Memory Storage",
    category: "Caching & State",
    description: "Advanced data structures (ZSET, Bitmaps, HyperLogLog), Lua scripting, pub/sub pipelines, and caching patterns.",
    keyConcepts: ["Atomic Lua", "Skip Lists", "Cache Invalidation", "Memory Optimization"],
  },
  {
    title: "Database Internals",
    category: "Storage Engine",
    description: "B+ Tree storage, Write-Ahead Logging (WAL), transaction isolation levels, row locks, and storage page layouts.",
    keyConcepts: ["B+ Tree Indexing", "MVCC", "Lock Contention", "InnoDB Buffer Pool"],
  },
  {
    title: "Concurrency & Thread Safety",
    category: "Runtime & OS",
    description: "Multi-threaded programming, atomic primitives, non-blocking synchronization, thread pools, and memory barriers.",
    keyConcepts: ["Java Memory Model", "Thread Pools", "CAS Primitives", "Deadlock Prevention"],
  },
  {
    title: "Caching Strategies",
    category: "Performance",
    description: "Cache-aside, write-through, read-through, multi-tier L1/L2 caching, cache stampede prevention, and dogpiling protection.",
    keyConcepts: ["Cache Stampede", "TTL Policies", "Near-Cache", "Two-Tier Caching"],
  },
  {
    title: "Event-Driven Architecture",
    category: "Integration",
    description: "Asynchronous messaging, decoupling producers and consumers, event sourcing, and guaranteed delivery semantics.",
    keyConcepts: ["At-least-once Delivery", "Outbox Pattern", "Eventual Consistency"],
  },
  {
    title: "AWS & Cloud Infrastructure",
    category: "Cloud",
    description: "Deploying resilient workloads across cloud primitives: compute (EC2/ECS), storage (S3/EBS), and managed databases (RDS).",
    keyConcepts: ["VPC Networking", "IAM Roles", "Auto Scaling", "Load Balancing"],
  },
  {
    title: "Cloudflare Workers & Edge",
    category: "Edge Computing",
    description: "Edge caching, DNS routing, low-latency static asset distribution, and request interception closer to users.",
    keyConcepts: ["Edge CDN", "SSL/TLS", "Anycast Routing", "Header Transformations"],
  },
  {
    title: "System Design",
    category: "System Engineering",
    description: "Architecting high-availability backends from requirements breakdown to bottleneck elimination and scaling paths.",
    keyConcepts: ["High Availability", "Backpressure", "Circuit Breakers", "Rate Limiting"],
  },
];
