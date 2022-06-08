import Article from './Article';

const ArticleList = ({posts}) => {
    //console.log(posts)
    const articleListItems = posts.map((post) => {
        return (
            <Article 
                key={post.id} 
                title={post.title}
                date={post.date}
                preview={post.preview}
            />
        )
    })
    return (
        <main>
            {articleListItems}
        </main>
    )
}

export default ArticleList