// ag-grid-ng2 v4.2.2
import { GridApi, ColumnApi } from 'ag-grid';
import { ElementRef } from '@angular/core';
export declare class AgGridNg2 {
    private elementDef;
    private _initialised;
    private _destroyed;
    private gridOptions;
    api: GridApi;
    columnApi: ColumnApi;
    constructor(elementDef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    private globalEventListener(eventType, event);
}
