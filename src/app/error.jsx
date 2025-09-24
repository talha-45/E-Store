"use client";
import Container from '@/components/home/Container';
import React from 'react';

export default function error() {
  return (
    <Container>
    <h1 className='text-center text-2xl text-red-500 my-3'>
      Something went wrong!
    </h1>
    </Container>
  )
}
