import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import twitterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <Link to="">
          <Hash />
          <span>Explore</span>
        </Link>
        <Link to="">
          <Bell />
          <span>Notifications</span>
        </Link>
        <Link to="">
          <Envelope />
          <span>Messages</span>
        </Link>
        <Link to="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </Link>
        <Link to="">
          <FileText />
          <span>Lists</span>
        </Link>
        <Link to="">
          <User />
          <span>Profile</span>
        </Link>
        <Link to="">
          <DotsThreeCircle />
          <span>More</span>
        </Link>
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
