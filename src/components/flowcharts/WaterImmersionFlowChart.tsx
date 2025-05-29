import { ReactFlow, Background, Controls } from "@xyflow/react";
import { Node, Edge } from "@xyflow/react";

const nodeStyle = {
  width: 160,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'normal',
  border: '1px solid #044cc9',
  borderRadius: 3,
  background: '#fff',
  color: '#061e70',
};


const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Water Superheated in Tank: Heated up to 135°C in top storage vessel." },
    position: { x: -150, y: 0 },
    sourcePosition: "right",
    style: nodeStyle,
  },
  {
    id: "2",
    data: { label: "Hot Water Pumped to Retort: Rapid transfer from tank to retort chamber" },
    position: { x: 150, y: 0 },
    targetPosition: "left",
    sourcePosition: "bottom",
    style: nodeStyle,
  },
  {
    id: "3",
    data: { label: "Products submerged in hot water for sterilization." },
    position: { x: 150, y: 150 },
    targetPosition: "top",
    sourcePosition: "left",
    style: nodeStyle,
  },
  {
    id: "4",
    data: { label: "Forced Water Circulation Begins: High-flow pump ensures fast, uniform heat transfer." },
    position: { x: -150, y: 150 },
    targetPosition: "right",
    sourcePosition: "bottom",
    style: nodeStyle,
  },
  {
    id: "5",
    data: { label: "Sterilization at Target Fo: Temperature held for calculated time to reach Fo." },
    position: { x: -150, y: 300 },
    targetPosition: "top",
    sourcePosition: "right",
    style: nodeStyle,
  },
  {
    id: "6",
    data: { label: "Cooling Water Circulated: Cold water passed through heat exchanger for cooling." },
    position: { x: 150, y: 300 },
    targetPosition: "left",
    sourcePosition: "bottom",
    style: nodeStyle,
  },
  {
    id: "7",
    type: "output",
    data: { label: "Water Recovered to Tank: Process water collected for reuse" },
    position: { x: 0, y: 450 },
    targetPosition: "top",
    style: nodeStyle,
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: '#044cc9', strokeWidth: 2 }, markerEnd: { type: 'arrow', color: '#044cc9' } },
  { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: '#044cc9', strokeWidth: 2 }, markerEnd: { type: 'arrow', color: '#044cc9' } },
  { id: "e3-4", source: "3", target: "4", animated: true, style: { stroke: '#044cc9', strokeWidth: 2 }, markerEnd: { type: 'arrow', color: '#044cc9' } },
  { id: "e4-5", source: "4", target: "5", animated: true, style: { stroke: '#044cc9', strokeWidth: 2 }, markerEnd: { type: 'arrow', color: '#044cc9' } },
  { id: "e5-6", source: "5", target: "6", animated: true, style: { stroke: '#044cc9', strokeWidth: 2 }, markerEnd: { type: 'arrow', color: '#044cc9' } },
  { id: "e6-7", source: "6", target: "7", animated: true, style: { stroke: '#044cc9', strokeWidth: 2 }, markerEnd: { type: 'arrow', color: '#044cc9' } },
];

const flowStyles = { width: "100%", height: 700 };

const WaterImmersionFlowChart = () => (
  <div className="my-8">
    <h2 className="text-2xl font-bold mb-6 text-center">
      The Water Immersion retort follows a controlled, multi-phase batch process:
    </h2>
    <div style={flowStyles}>
      <ReactFlow
        nodes={nodes as Node[]}
        edges={edges as Edge[]}
        fitView
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        elementsSelectable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        edgesFocusable={false}
        nodesFocusable={false}
        selectionOnDrag={false}
        selectionKeyCode={null}
        multiSelectionKeyCode={null}
        draggable={false}
        // unselectable={true}
      >
        <Controls showInteractive={false} showZoom={false} showFitView={false} />
        <Background gap={16} size={1}  />
      </ReactFlow>
    </div>
  </div>
);

export default WaterImmersionFlowChart;
