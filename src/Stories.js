import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className='bg-black rounded-3xl shadow-md p-6'>
            <h4 className='title text-white'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments/opinions
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read article
              </a>
              <button
                className='remove-btn'
                onClick={() => removeStory(objectID)}
              >
                delete
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
