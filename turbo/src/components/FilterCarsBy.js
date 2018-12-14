import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from './Slider';
// import Range from './Range';
import 'rc-slider/assets/index.css';
import FilterByCheckboxDropdown from './FilterByCheckboxDropdown';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      overlay={10}
      placement="top"
      prefixCls="rc-slider-tooltip"
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const FilterCarsBy = () => {
  let list = [
    {
      title:"Brand",
      list:[
        "Toyota",
        "Ford",
        "Porche"
      ]
    },
    {
      title:"className",
      list:[
        "A Class",
        "B Class",
        "C Class"
      ]
    },
    {
      title:"Field",
      list:[
        "50 Liter",
        "100 Liter",
        "150 Liter"
      ]
    }

  ];
  return (
    <div className="rq-listing-top-bar-filter-option">
      <div className="filter-list">
        <h5>Filter by</h5>
        {list.map((filter,index)=>
          <FilterByCheckboxDropdown key={index} title={filter.title} list={filter.list} />
        )}
        <div className="filter-single">
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Price <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="rq-pricing-slider">
                  <Range trackStyle={{backgroundColor:"#efa80f"}} handleStyle={{backgroundColor: "#efa80f"}} min={0} max={20} defaultValue={[3,20]} tipFormatter={value => `${value}`}/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rq-grid-list-view-option">
        <a className="active" href="#"><i className="ion-grid"></i></a>
        <a href="#"><i className="ion-navicon"></i></a>
      </div>
    </div>
  );
}
export default FilterCarsBy;
