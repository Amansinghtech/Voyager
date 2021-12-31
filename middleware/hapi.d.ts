import { Server } from 'hapi';
export interface Register {
    (server: Server, options: any): void;
}
export interface Plugin {
    pkg?: any;
    register: Register;
}
declare const hapi: Plugin;
export default hapi;
