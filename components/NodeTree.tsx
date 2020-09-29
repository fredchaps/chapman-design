import LinearGradient from "@visx/gradient/lib/gradients/LinearGradient";
import { Group } from "@visx/group";
import { Cluster, hierarchy } from "@visx/hierarchy";
import {
  HierarchyPointLink,
  HierarchyPointNode,
} from "@visx/hierarchy/lib/types";
import { LinkVertical } from "@visx/shape";
import { green, aqua, background, merlinsbeard } from "constants/colors";
import React, { useMemo } from "react";
import { DendrogramProps, NodeShape } from "types/Node";
import NodeElement from "./NodeElement";

const defaultMargin = { top: 40, left: 0, right: 0, bottom: 40 };

export default function NodeTree({
  width,
  height,
  margin = defaultMargin,
  clusterData,
}: DendrogramProps) {
  const data = useMemo(() => hierarchy<NodeShape>(clusterData), []);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="top" from={green} to={aqua} />
      <rect width={width} height={height} rx={14} fill={background} />
      <Cluster<NodeShape> root={data} size={[xMax, yMax]}>
        {(cluster) => (
          <Group top={margin.top} left={margin.left}>
            {cluster.links().map((link, i) => (
              <LinkVertical<
                HierarchyPointLink<NodeShape>,
                HierarchyPointNode<NodeShape>
              >
                key={`cluster-link-${i}`}
                data={link}
                stroke={merlinsbeard}
                strokeWidth="1"
                strokeOpacity={0.2}
                fill="none"
              />
            ))}
            {cluster.descendants().map((node, i) => (
              <NodeElement key={`cluster-node-${i}`} node={node} />
            ))}
          </Group>
        )}
      </Cluster>
    </svg>
  );
}
