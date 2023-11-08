'use client'
import { useCallback, useState } from 'react';
import defaultNodes from '@/data/nodes';
import defaultEdges from '@/data/edges';
import ReactFlow,{MiniMap, Controls, Background, applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange} from 'reactflow'
import 'reactflow/dist/style.css';

export default function Workflow() {

    const [nodes, setNodes] = useState(defaultNodes)
    const [edges, setEdges] = useState(defaultEdges)

    const onNodesChange = useCallback((changes: NodeChange[])=> setNodes((nds) => applyNodeChanges(changes,nds)),[setNodes])
    const onEdgesChange = useCallback((changes: EdgeChange[])=> setEdges((eds) => applyEdgeChanges(changes,eds)),[setEdges])

    return (
        <div className="h-full flex flex-col text-lg">
            <span className={`text-center text-xl font-semibold`}>Workflow</span>
            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView><Controls /><Background /></ReactFlow>
        </div>            
    )
}
