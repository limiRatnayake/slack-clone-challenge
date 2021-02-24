import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";

export const sidebarItems = [
   {
      icon: <MessageIcon />,
      text: "Thread",
   },
   {
      icon: <InboxIcon />,
      text: "All DMs",
   },
   {
      icon: <DraftsIcon />,
      text: "Mentions & Reactions",
   },
   {
      icon: <BookmarkBorderIcon />,
      text: "Save Items",
   },
   {
      icon: <PeopleAltIcon />,
      text: "People and Groups",
   },
   {
      icon: <AppsIcon />,
      text: "More",
   },
];
