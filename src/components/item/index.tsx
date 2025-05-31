import { TItem } from "../../types";
import s from "./item.module.css";

type TItemProps = {
  item: TItem;
};

export const Item = ({ item }: TItemProps) => {
  return <div className={s.item} style={item} />;
};