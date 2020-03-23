import React from 'react'
import { MockedProvider } from '@apollo/react-testing';
import LaunchListDefault from '../components/LaunchList/LaunchListDefault';
import { QUERY_LAUNCH_LIST } from '../components/LaunchList/query'
import renderer from 'react-test-renderer'

const mocks = [
    {
      request: {
        query: QUERY_LAUNCH_LIST,
      },
      result: {
        data: {
          dog: { id: '1', name: 'Buck', breed: 'bulldog' },
        },
      },
    },
  ];

  it('renders without error', () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LaunchListDefault />
      </MockedProvider>,
    );
  });