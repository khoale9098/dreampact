import React, { useState, useRef } from 'react';

import { AccordionProps } from './types';

import {
  AccordionContentStyle,
  AccordionTitleStyle,
  AccordionItemStyle,
  AccordionStyle,
  AccordionTextStyle,
} from './styles';

import { ChevronRightIcon } from '../icons';

export function Accordion(props: AccordionProps) {
  const { title, content } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    setHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);
  };

  return (
    <AccordionStyle active={isOpen}>
      <AccordionItemStyle onClick={toggleAccordion}>
        <AccordionTitleStyle>{title}</AccordionTitleStyle>

        <ChevronRightIcon fill="dark" />
      </AccordionItemStyle>
      <AccordionContentStyle ref={contentRef} style={{ maxHeight: height }}>
        <AccordionTextStyle>{content}</AccordionTextStyle>
      </AccordionContentStyle>
    </AccordionStyle>
  );
}

export * from './types';
export * from './styles';
export * from './AccordionGroup';
