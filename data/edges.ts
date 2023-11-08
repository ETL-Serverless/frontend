import { Edge } from "reactflow";

const defaultEdges : Edge[] = [
    { id: 'e1-2', source: '1', target: '2', type: 'step'},
    { id: 'e2-3', source: '2', target: '3', type: 'step' },
    { id: 'e3-4', source: '3', target: '4', type: 'step' },
    { id: 'e3-5', source: '3', target: '5', type: 'step' },    
    { id: 'e3-6', source: '3', target: '6', type: 'step' },    
    { id: 'e3-7', source: '3', target: '8', type: 'step' },    
    { id: 'e6-7', source: '6', target: '7', type: 'step' },    
    { id: 'e8-9', source: '8', target: '9', type: 'step' },    
    { id: 'e9-10', source: '9', target: '10', type: 'step' },    
];

export default defaultEdges