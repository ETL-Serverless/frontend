import { Node } from "reactflow";

const defaultNodes: Node[] = [
    { id: '1', data: { label: 'postgresql_table' }, position: { x: 5, y: 5 }, style: {border : "1px solid #FF0000",color : "red",font: "15px bold"}},
    { id: '2', data: { label: 'run' }, position: { x: 5, y: 100 }, style: {border : "1px solid #FF0000",color : "red",font: "15px bold"}},
    { id: '3', data: { label: 'run(0)' }, position: { x: 5, y: 200 }, style: {border : "1px solid #FF0000",color : "red",font: "15px bold"}},
    { id: '4', data: { label: 'mine-insights' }, position: { x: -400, y: 300 }, style : {font: "15px bold"}},
    { id: '5', data: { label: 'mine-lineage' }, position: { x: -200, y: 300 }, style : {font: "15px bold"} },
    { id: '6', data: { label: 'generate-sql' }, position: { x: 200, y: 300 }, style : {font: "15px bold"}},
    { id: '7', data: { label: 'run' }, position: { x: 200, y: 400 }, style : {font: "15px bold"}},
    { id: '8', data: { label: 'mine-insights' }, position: { x: 400, y: 300 }, style: {border : "1px solid #FF0000",color : "red",font: "15px bold"}},
    { id: '9', data: { label: 'get-credential-...' }, position: { x: 400, y: 400 }, style: {border : "1px solid green",color : "green",font: "15px bold"}},
    { id: '10', data: { label: 'get-credential-...' }, position: { x: 400, y: 500 }, style: {border : "1px solid green",color : "green",font: "15px bold"}},
  ];

export default defaultNodes