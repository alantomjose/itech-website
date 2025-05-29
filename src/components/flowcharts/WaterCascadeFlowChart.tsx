import { ReactFlow, Background, Controls } from "@xyflow/react";


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
    data: { label: "Water Drawn from Retort Base: Collected process water is pumped out." },
    position: { x: -150, y: 0 },
    sourcePosition: "right",
    style: nodeStyle,
  },
  {
    id: "2",
    data: { label: "External heat exchanger warms process water." },
    position: { x: 150, y: 0 },
    targetPosition: "left",
    sourcePosition: "bottom",
    style: nodeStyle,
  },
  {
    id: "3",
    data: { label: "Pump extracts water from chamber bottom and Heated via  Heat Exchanger" },
    position: { x: 150, y: 150 },
    targetPosition: "top",
    sourcePosition: "left",
    style: nodeStyle,
  },
  {
    id: "4",
    data: { label: "Heated water cascades over baskets through perforated plate" },
    position: { x: -150, y: 150 },
    targetPosition: "right",
    sourcePosition: "bottom",
    style: nodeStyle,
  },
  {
    id: "5",
    data: { label: "Water channels evenly through containers." },
    position: { x: -150, y: 300 },
    targetPosition: "top",
    sourcePosition: "right",
    style: nodeStyle,
  },
  {
    id: "6",
    data: { label: "Water returns to sump for reuse; cycle repeats." },
    position: { x: 150, y: 300 },
    targetPosition: "left",
    sourcePosition: "bottom",
    style: nodeStyle,
  },
  {
    id: "7",
    type: "output",
    data: { label: "Cooling Phase: Cooler water or exchanger reduces temperature" },
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

const WaterCascadeFlowChart = () => (
  <div className="my-8">
    <h2 className="text-2xl font-bold mb-6 text-center">
      The Water Cascade Retort follows a controlled, multi-phase batch process:
    </h2>
    <div style={flowStyles}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
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
        selectable={false}
      >
        <Controls showInteractive={false} showZoom={false} showFitView={false} showPan={false} />
        <Background gap={16} size={1}  />
      </ReactFlow>
    </div>
  </div>
);

export default WaterCascadeFlowChart;
