export interface NodeShape {
  name: string;
  url: string;
  children?: NodeShape[];
  background: string;
}

export type DendrogramProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  clusterData: NodeShape;
};
