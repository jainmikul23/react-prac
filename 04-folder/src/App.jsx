import React from 'react'

import Card from './components/Card'
const App = () => {
  const jobs = [
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128',
      name: 'Google',
      datePosted: '5 days ago',
      post: 'Senior UI/UX Designer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pay: 120,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128',
      name: 'Amazon',
      datePosted: '10 weeks ago',
      post: 'Frontend Developer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pay: 85,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=meta.com&sz=128',
      name: 'Meta',
      datePosted: '2 days ago',
      post: 'Product Designer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pay: 110,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128',
      name: 'Apple',
      datePosted: '1 week ago',
      post: 'iOS Developer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pay: 95,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
      name: 'Microsoft',
      datePosted: '3 days ago',
      post: 'Software Engineer',
      tag1: 'Full Time',
      tag2: 'Junior Level',
      pay: 75,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128',
      name: 'Netflix',
      datePosted: '4 weeks ago',
      post: 'Motion Graphics Designer',
      tag1: 'Contract',
      tag2: 'Senior Level',
      pay: 100,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=128',
      name: 'NVIDIA',
      datePosted: '6 days ago',
      post: 'Machine Learning Engineer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pay: 130,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128',
      name: 'Adobe',
      datePosted: '2 weeks ago',
      post: 'UX Researcher',
      tag1: 'Part Time',
      tag2: 'Mid Level',
      pay: 80,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=128',
      name: 'Salesforce',
      datePosted: '8 days ago',
      post: 'Cloud Solutions Architect',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pay: 115,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://www.google.com/s2/favicons?domain=uber.com&sz=128',
      name: 'Uber',
      datePosted: '12 days ago',
      post: 'Data Analyst',
      tag1: 'Full Time',
      tag2: 'Junior Level',
      pay: 70,
      location: 'Mumbai, India',
    },
  ]
  return (
    <div className='parent'>

{jobs.map((ele) => (
  <Card
    key={ele.name}
    brandLogo={ele.brandLogo}
    name={ele.name}
    datePosted={ele.datePosted}
    post={ele.post}
    tag1={ele.tag1}
    tag2={ele.tag2}
    pay={ele.pay}
    location={ele.location}
  />
))}
      </div>
    
  )
}

export default App