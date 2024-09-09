class Tree<T> {
  public left: Tree<T> | null;
  public right: Tree<T> | null;
  public value: T;

  // Constructor overload signatures
  constructor(value: T);
  constructor(value: T, left: Tree<T> | null, right: Tree<T> | null);

  // Constructor implementation
  constructor(
    value: T,
    left: Tree<T> | null = null,
    right: Tree<T> | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  addRight(tree: Tree<T>) {
    if (this.right !== null) {
      throw new Error("right leave already occupied!");
    }

    this.right = tree;
    return tree;
  }

  addLeft(tree: Tree<T>) {
    if (this.left !== null) {
      throw new Error("left leave already occupied!");
    }

    this.left = tree;
    return tree;
  }

  traversal() {
    if (this.left) {
      this.left.traversal();
    }
    console.log(this.value);

    if (this.right) {
      this.right.traversal();
    }
  }
}

type TreeValueType = {
  name: string;
  value: number;
};
const root = new Tree<TreeValueType>({
  name: "root",
  value: 100,
});
const leave1 = new Tree<TreeValueType>({
  name: "leave1",
  value: 10,
});
