import { Phone, Users2, MessagesSquare, Settings } from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Image src="/linear-icon.svg" alt="" width={50} height={50} />
      <div className={styles.sidebarList}>
        <Link href="/friends">
          <Users2 />
        </Link>
        <Link href="/call">
          <Phone />
        </Link>
        <Link href="/chats">
          <MessagesSquare />
        </Link>
        <Link href="/settings">
          <Settings />
        </Link>
      </div>
    </div>
  )
};

export default Sidebar;
