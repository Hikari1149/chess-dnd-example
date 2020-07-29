import React from 'react'
import Tooltip from '@ubnt/ui-components/Tooltip/Tooltip'
import styled from 'styled-components'





export const ScrollContainer = styled.div.attrs({
  className:'scroll-bar'
})`
    width:100%;
    display:flex;
    justify-content:center;
    max-height:${props=>props.height}px;
    overflow:auto;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
`
export const ColContainer = styled.div`
  display:flex;
  flex-direction:column;
`

export const Label = styled.div.attrs({
  className:'c-label'
})`
  font-size:${props=>props.size || 12}px;
  font-weight: ${props=>props.bold?'bold':'normal'};
  line-height:1.25;
  color:${
  props=>(props.color==='black-6' && '#333543') ||
    (props.color==='black-5' && '#525461') ||
    (props.color==='black-4' && '#1c1e2d') ||
    (props.color==='black-0' && '#000') ||
    (props.color==='blue-6' && '#006fff') ||
    (props.color==='blue-7' && '#0071ff') ||
    (props.color==='green-2' && '#24c186') ||
    (props.color==='green-3' && '#39cc64') ||
    (props.color==='green-5' && '#00d155') ||
    (props.color==='orange-5' && '#f5a623') ||
    (props.color==='orange-6' && '#ffaa2e') ||
    (props.color==='orange-7' && '#fda515') ||
    (props.color==='orange-9' && '#f97800') ||
    (props.color==='grey-2' && '#bbbbbb') ||
    (props.color==='grey-4' && '#a4a7b5') ||
    (props.color==='grey-5' && '#d5d5d4') ||
    (props.color==='grey-7' && '#7e8190') ||
    (props.color==='grey-9' && '#999fab') ||
    (props.color==='grey-11' && '#a9a9a9') ||
    (props.color==='grey-12' && '#c2c4ce') ||
    (props.color==='red-7' && `#f7151a`) ||
    (props.color==='white-0' && '#fff') ||
    (props.color==='white-8' && '#f8f8f9') ||
    '#a4a7b5'
  };
  width: ${props=>props.width || 'auto'};
  text-align: ${props=>props.align || 'left'}
`
export const LabelNoWrap = styled(Label)`
  max-width:${props=>props.width || 80}px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
`
export const LabelMultiLine = styled(Label)`
  max-width:${props=>props.width || 80}px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
`
export const LabelAction = styled(LabelNoWrap)`
  :hover{
    cursor:pointer;
    text-decoration:underline;
  }
`
export const LabelPanelTitle = styled(Label).attrs({
  bold:true,
  color:'black-6'
})`
`
export const LabelOptionWrapper = styled(Label)`
  display:flex;
  align-items:center;
  width: 100%;
  height:${props=>props.height || '36'}px;
  cursor:pointer;
  padding:0 ${props=>props.pd || 10}px;
  background-color:${props=> props.isSelected?'#f8f8f9': 'transparent'};
  box-sizing:border-box;
  &:hover{
    background-color: ${({hoverColor})=>hoverColor|| '#f8f8f9'};
  }
  ${LabelNoWrap}{
    font-weight: ${props=>props.isSelected?'bold':'normal'};   
  }
`

export const ModalTitle = styled(Label).attrs({
  bold:true,
  size:18,
  color:'black-6'
})`
  margin-bottom: 30px;
  
`
export const AvatarWithText = styled.div.attrs({
  className:'avatar-with-text'
})`
  display:flex;
  align-items:center;
  >${Label},>${LabelNoWrap} {
    margin-left:${props=>props.mgLeft || 8}px;
  }
`
const Line  = styled.div`
  margin-bottom:${({mgB})=> mgB || 0}px;
  margin-top:${({mgT})=> mgT || 0}px;
  margin-left:${({mgL})=> mgL || 0}px;
  margin-right:${({mgR})=> mgR || 0}px;
  display:${({hide})=>hide?'none':'block'};
  background-color: ${({bgColor})=>bgColor || "#232323"};
`
export const HorizonLine = styled(Line)`
  width:${({width})=>width?`${width}px`:'100%'};
  min-height:1px;
`
export const VerticalLine = styled(Line)`
  min-width:1px;
  height:${({height})=>height?`${height}px`:'100%'};
`

export const ColoredRectangle = styled.div`
  width: ${({width})=> width || 6}px;
  height: ${({width})=> width || 6}px;
  border-radius: 1px;
  background-color:${({bgColor})=>bgColor};
`
