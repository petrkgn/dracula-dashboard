import { Injectable } from "@angular/core";

import Muuri, { GridOptions } from "muuri";

@Injectable({
  providedIn: "root",
})
export class MuuriGridService {
  private muuriGrid!: Muuri;

  constructor() {}

  public initMuuriGrid(
    gridContainer: string | HTMLElement,
    gridOptions?: GridOptions
  ) {
    this.muuriGrid = new Muuri(gridContainer, { ...gridOptions });
  }

  public addItemToGrid(targetItem: HTMLElement[]) {
    this.muuriGrid
      ? this.muuriGrid.add(targetItem, { index: 0 })
      : alert("Muuri grid is not initialized");
  }

  public removeItemFromGrid(targetItem: HTMLElement) {
    this.muuriGrid
      ? this.muuriGrid.remove(this.muuriGrid.getItems(targetItem), {
          removeElements: true,
        })
      : alert("Muuri grid is not initialized");
  }
}
