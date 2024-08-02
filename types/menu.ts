export interface TypeMenuItem {
  title: string;
}

export interface TypeMenu extends TypeMenuItem {
  items?: Array<TypeMenuItem>;
}
