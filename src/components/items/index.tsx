import { withControlRerenders } from "../../hocs/withControlRerenders";
import { TItemList } from "../../types";
import { Item } from "../item";
import s from "./items.module.css";

type TItemsProps = {
  items: TItemList;
};

const Items = ({ items }: TItemsProps) => {
  return (
    <div className={s.items}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default withControlRerenders("Items", Items);