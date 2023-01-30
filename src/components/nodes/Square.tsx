import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import '@reactflow/node-resizer/dist/style.css';

export default ({ selected }: NodeProps) => {
  return(
    <div className="bg-violet-500 rounded min-w-[100px] w-full h-full min-h-[100px]
    flex items-center justify-center">
      <strong className="text-white text-xl">
        Olá
      </strong>

      <NodeResizer
        minWidth={100}
        minHeight={100}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />

      <Handle 
        id="left" 
        type="source" 
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-blue-400/80"
      />

      <Handle 
        id="right" 
        type="source" 
        position={Position.Left}
        className="-left-5 w-3 h-3 bg-blue-400/80"
      />

      <Handle 
        id="top" 
        type="source" 
        position={Position.Top}
        className="-top-5 w-3 h-3 bg-blue-400/80"
      />

      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 bg-blue-400/80"
      />
    </div>
  );
}