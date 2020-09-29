import Link from "next/link";
import { Group } from "@visx/group";
import { HierarchyPointNode } from "@visx/hierarchy/lib/types";
import { background, white, citrus } from "constants/colors";
import React from "react";
import { NodeShape } from "types/Node";

export default function NodeElement({
  node,
}: {
  node: HierarchyPointNode<NodeShape>;
}) {
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;

  return (
    <Link href={node.data.url}>
      <Group top={node.y} left={node.x}>
        {node.depth !== 0 && (
          <circle r={12} fill={background} stroke={isParent ? white : citrus} />
        )}
        <text
          dy=".33em"
          fontSize={9}
          fontFamily="Arial"
          textAnchor="middle"
          style={{ pointerEvents: "none" }}
          fill={isParent ? white : citrus}
        >
          {node.data.name}
        </text>
      </Group>
    </Link>
  );
}

function RootNode({ node }: { node: HierarchyPointNode<NodeShape> }) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.y} left={node.x}>
      <rect
        width={width}
        height={height}
        y={centerY}
        x={centerX}
        fill="url('#top')"
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: "none" }}
        fill={background}
      >
        {node.data.name}
      </text>
    </Group>
  );
}
