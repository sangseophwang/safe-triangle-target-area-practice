import { MouseEventHandler } from 'react';

export interface TypeMenuItem {
  title: string;
  updateCursorLocation?: MouseEventHandler<HTMLButtonElement>;
}

export interface TypeMenu extends TypeMenuItem {
  items?: Array<TypeMenuItem>;
}
