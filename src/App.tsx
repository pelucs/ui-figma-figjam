import 'reactflow/dist/style.css';
import { Plus } from 'phosphor-react'
import ReactFlow, { 
  addEdge, 
  Background, 
  Connection, 
  ConnectionMode, 
  Controls, 
  Node, 
  useEdgesState, 
  useNodesState 
} from 'reactflow';
import { useCallback } from 'react';

import DefaultEdge from './components/edges/DefaultEdge';
import Square from './components/nodes/Square';

const NODE_TYPES = {
  square: Square
}

const EDGE_TYPES = {
  default: DefaultEdge
}

//NODES INICIAIS
const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 580,
      y: 200
    },
    data: {}
  }
] satisfies Node[];

export default () => {

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  
  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, []);

  const addSquareNode = () => {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350
        },
        data: {}
      },
    ]);
  }

  return(
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default'
        }}
      >
        <Background
          gap={12}
          size={2}
          color="#DDD"
        />
        <Controls/>
      </ReactFlow>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-20">
        <button
          onClick={addSquareNode}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-md bg-zinc-200"
        >
          <Plus 
            size={25}
          />
        </button>
      </div>
    </div>
  );
}