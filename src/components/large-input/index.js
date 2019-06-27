import React from 'react'
import { Input } from "antd";

export const LargeInput = ({style, ...rest})=>(
    <Input {...rest} style={{...style, height:50}} />
)