export interface ArrayManipulator {
  select: (index: number) => Promise<void>;
  deselect: (index: number) => Promise<void>;
  mark: (index: number) => Promise<void>;
  unmark: (index: number) => Promise<void>;
  update: (data: Array<any>) => Promise<void>;
}
