import styled from "styled-components";
import HomeIcon from "./../assets/home.png";
import WorkIcon from "./../assets/work.png";
import ConfigIcon from "./../assets/configurations.png";
import HelpIcon from "./../assets/help.png";
import Lateralbar from "./../assets/lateralbar.png";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// SideNav
const StyledSideNav = styled(SideNav)`
  background-color: #3e3e3e;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// Toggle
const StyledToggle = styled(Toggle)`
  background-color: #db3d44;
`;
StyledToggle.defaultProps = Toggle.defaultProps;

// Nav
const StyledNav = styled(Nav)`
  background-color: #fff;
  &&[class*="expanded--"] {
    [class*="sidenav-subnav--"] {
      > [class*="sidenav-subnavitem--"],
      > [class*="sidenav-subnavitem--"]:hover {
        > [class*="navitem--"] {
          color: #222;
        }
      }
      > [class*="sidenav-subnavitem--"]:hover {
        > [class*="navitem--"] {
          background-color: #eee;
        }
      }
      > [class*="sidenav-subnavitem--"][class*="selected--"] {
        > [class*="navitem--"] {
          color: #db3d44;
        }
        > [class*="navitem--"]::before {
          border-left: 2px solid #db3d44;
        }
      }
    }
  }
  && > [class*="sidenav-navitem--"] {
    > [class*="navitem--"] {
      background-color: inherit;
      color: #222;
    }
  }
  && > [class*="sidenav-navitem--"]:hover {
    > [class*="navitem--"] {
      background-color: #eee;
    }
  }
  && > [class*="sidenav-navitem--"],
  && > [class*="sidenav-navitem--"]:hover {
    > [class*="navitem--"] {
      [class*="navicon--"] {
        &,
        > * {
          color: #666;
        }
      }
      [class*="sidenav-nav-text--"] {
        &,
        > * {
          color: #222;
        }
      }
    }
  }
  && > [class*="sidenav-navitem--"][class*="highlighted--"],
  && > [class*="sidenav-navitem--"][class*="highlighted--"]:hover {
    > [class*="navitem--"] {
      [class*="navicon--"],
      [class*="navtext--"] {
        &,
        > * {
          color: #db3d44;
        }
      }
      [class*="sidenav-nav-text--"] {
        font-weight: 700;
      }
    }
  }
`;
StyledNav.defaultProps = Nav.defaultProps;

// NavItem
const NavItem1 = styled(NavItem)`
  margin-top: 20%;

  &&&:hover {
    [class*="navtext--"] {
      color: #222;
    }
  }
`;
NavItem1.defaultProps = NavItem.defaultProps;

// NavIcon
const StyledNavIcon = styled(NavIcon)`
  color: #222;
`;
StyledNavIcon.defaultProps = NavIcon.defaultProps;

// NavText
const StyledNavText = styled(NavText)`
  color: #222;
`;
StyledNavText.defaultProps = NavText.defaultProps;

const SImg = styled.img`
  width: 75%;
`;

function StyledSideNav1() {
  return (
    <div>
      {" "}
      <StyledSideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="lateralbar">
          <NavItem1 eventKey="home">
            <NavIcon>
              <img className="nav-img" src={HomeIcon} />
            </NavIcon>
            <NavText> Home</NavText>
          </NavItem1>
          <NavItem1 eventKey="work">
            <NavIcon>
              <img className="nav-img" src={WorkIcon} />
            </NavIcon>
            <NavText> Work</NavText>
          </NavItem1>
          <NavItem eventKey="lateralbar">
            <NavIcon>
              <SImg src={Lateralbar} />
            </NavIcon>
          </NavItem>
          <NavItem1 eventKey="configurations">
            <NavIcon>
              <img className="nav-img" src={ConfigIcon} />
            </NavIcon>
            <NavText> Configurations</NavText>
          </NavItem1>
          <NavItem1 eventKey="help">
            <NavIcon>
              <img className="nav-img" src={HelpIcon} />
            </NavIcon>
            <NavText> Help</NavText>
          </NavItem1>
        </SideNav.Nav>
      </StyledSideNav>
    </div>
  );
}

export default StyledSideNav1;
