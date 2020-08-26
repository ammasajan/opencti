import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BugReport } from '@material-ui/icons';
import {
  Gauge,
  LockPattern,
  Application,
  Target,
  SourcePull,
  Biohazard,
} from 'mdi-material-ui';
import inject18n from '../../../../components/i18n';

const styles = (theme) => ({
  drawer: {
    minHeight: '100vh',
    width: 240,
    position: 'fixed',
    overflow: 'auto',
    padding: 0,
    backgroundColor: theme.palette.background.navLight,
  },
  toolbar: theme.mixins.toolbar,
});

class XOpenCTIXOpenCTIIncidentKnowledgeBar extends Component {
  render() {
    const {
      t, location, classes, xOpenCTIIncidentId,
    } = this.props;
    return (
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbar} />
        <MenuList component="nav">
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/overview`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/overview`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Gauge />
            </ListItemIcon>
            <ListItemText
              primary={t('Overview')}
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/attribution`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/attribution`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <SourcePull />
            </ListItemIcon>
            <ListItemText primary={t('Attribution')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/victimology`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/victimology`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Target />
            </ListItemIcon>
            <ListItemText primary={t('Victimology')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/malwares`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/malwares`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Biohazard />
            </ListItemIcon>
            <ListItemText primary={t('Malwares')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/ttp`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/ttp`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <LockPattern />
            </ListItemIcon>
            <ListItemText primary={t('Attack patterns')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/tools`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/tools`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Application />
            </ListItemIcon>
            <ListItemText primary={t('Tools')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/vulnerabilities`}
            selected={
              location.pathname
              === `/dashboard/threats/incidents/${xOpenCTIIncidentId}/knowledge/vulnerabilities`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <BugReport />
            </ListItemIcon>
            <ListItemText primary={t('Vulnerabilities')} />
          </MenuItem>
        </MenuList>
      </Drawer>
    );
  }
}

XOpenCTIXOpenCTIIncidentKnowledgeBar.propTypes = {
  xOpenCTIIncidentId: PropTypes.string,
  classes: PropTypes.object,
  location: PropTypes.object,
  t: PropTypes.func,
};

export default compose(
  inject18n,
  withRouter,
  withStyles(styles),
)(XOpenCTIXOpenCTIIncidentKnowledgeBar);