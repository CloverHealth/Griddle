import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withHandlers from 'recompose/withHandlers';
import { sortPropertyByIdSelector, iconsForComponentSelector, customHeadingComponentSelector, stylesForComponentSelector, classNamesForComponentSelector } from '../../../selectors/dataSelectors';
import { setSortColumn } from '../../../actions';
import { setSortProperties } from '../../../utils/sortUtils';

const DefaultTableHeadingCellContent = ({title, icon}) => (
  <span>
    { title }
    { icon && <span>{icon}</span> }
  </span>
)

function getIcon({sortProperty, sortAscendingIcon, sortDescendingIcon}) {
  if (sortProperty) {
    return sortProperty.sortAscending ? sortAscendingIcon : sortDescendingIcon;
  }

  // return null so we don't render anything if no sortProperty
  return null;
}
const EnhancedHeadingCell = (OriginalComponent => compose(
  connect(
    (state, props) => ({
      sortProperty: sortPropertyByIdSelector(state, props),
      customHeadingComponent: customHeadingComponentSelector(state, props),
      className: classNamesForComponentSelector(state, 'TableHeadingCell'),
      style: stylesForComponentSelector(state, 'TableHeadingCell'),
      ...iconsForComponentSelector(state, 'TableHeadingCell'),
    }),
    {
      setSortColumn
    }
  ),
  withHandlers({
    onClick: setSortProperties
  }),
  //TODO: use with props on change or something more performant here
  mapProps(props => {
    const icon = getIcon(props);
    const title = props.customHeadingComponent ?
      <props.customHeadingComponent {...props} icon={icon} /> :
      <DefaultTableHeadingCellContent title={props.title} icon={icon} />;
    return {
      ...props,
      icon,
      title
    };
  })
)((props) => (
  <OriginalComponent
    {...props}
    onClick={props.onClick} />
)));

export default EnhancedHeadingCell;
