import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

const RichText = ({ content }) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: text =>
                <b>
                    {text}
                </b>
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return (
                    <p>
                        {children}
                    </p>
                )
            }
        }
    }

    return documentToReactComponents(content, options)
}

export default RichText
