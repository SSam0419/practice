type ShipperOrderLocation = {
  lat: number;
  lng: number;
};

type ShipperOrder = {
  id: string;
  location: ShipperOrderLocation;
};

class DBSCAN {
  private shipperOrders: ShipperOrder[];
  private epsilon: number;
  private minPoints: number;
  private clusters: ShipperOrder[][];
  private noise: ShipperOrder[];
  private visited: Set<string>;
  private clustered: Set<string>;

  constructor(
    shipperOrders: ShipperOrder[],
    epsilon: number,
    minPoints: number
  ) {
    console.log("<= DBSCAN constructor =>")
    this.shipperOrders = shipperOrders;
    this.epsilon = epsilon;
    this.minPoints = minPoints;
    this.clusters = [];
    this.noise = [];
    this.visited = new Set();
    this.clustered = new Set();
  }

  public run(): { clusters: ShipperOrder[][]; noise: ShipperOrder[] } {
    for (const order of this.shipperOrders) {
      if (this.visited.has(order.id)) continue;

      this.visited.add(order.id);
      const neighbors = this.getNeighbors(order);

      if (neighbors.length < this.minPoints) {
        this.noise.push(order);
      } else {
        const cluster: ShipperOrder[] = [];
        this.expandCluster(order, neighbors, cluster);
        this.clusters.push(cluster);
      }
    }

    return { clusters: this.clusters, noise: this.noise };
  }

  private expandCluster(
    order: ShipperOrder,
    neighbors: ShipperOrder[],
    cluster: ShipperOrder[]
  ): void {
    cluster.push(order);
    this.clustered.add(order.id);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!this.visited.has(neighbor.id)) {
        this.visited.add(neighbor.id);
        const newNeighbors = this.getNeighbors(neighbor);
        if (newNeighbors.length >= this.minPoints) {
          neighbors.push(...newNeighbors);
        }
      }

      if (!this.clustered.has(neighbor.id)) {
        cluster.push(neighbor);
        this.clustered.add(neighbor.id);
      }
    }
  }

  private getNeighbors(order: ShipperOrder): ShipperOrder[] {
    return this.shipperOrders.filter(
      (other) =>
        other.id !== order.id &&
        this.distance(order.location, other.location) <= this.epsilon
    );
  }

  private distance(
    loc1: ShipperOrderLocation,
    loc2: ShipperOrderLocation
  ): number {
    const dx = loc1.lng - loc2.lng;
    const dy = loc1.lat - loc2.lat;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Usage example:
const orders: ShipperOrder[] = [
  { id: "1", location: { lat: 0, lng: 0 } },
  { id: "2", location: { lat: 0.1, lng: 0.1 } },
  { id: "3", location: { lat: 0.2, lng: 0.2 } },
  { id: "4", location: { lat: 5, lng: 5 } },
  { id: "5", location: { lat: 5.1, lng: 5.1 } },
];

const dbscan = new DBSCAN(orders, 0.3, 2);
const result = dbscan.run();

console.log("Clusters:", result.clusters);
console.log("Noise:", result.noise);
