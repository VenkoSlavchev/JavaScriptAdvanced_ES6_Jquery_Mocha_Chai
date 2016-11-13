'use strict';
let l = (function () {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.arrayOfComments = [];
        }

        addComment(coment) {
            this.arrayOfComments.push(coment);
        }

        toString() {
            let result = super.toString() + `Rating: ${Number(this.likes) - Number(this.dislikes)}\n`;
            if (this.arrayOfComments.length > 0) {
                result += `Comments:\n`;
                for (let comment of this.arrayOfComments) {
                    result += ` * ${comment}\n`;
                }
            }
            return result;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this._views = 0;
        }

        view() {
            this._views += 1;
            return this.view;
        }

        toString() {
            return super.toString() + `Views: ${this._views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost

    }
})();

// //Test the code
// let s = new l.BlogPost("TestTitle", "TestContent");
//
// console.log(s.toString());
// let post = new Post("Post", "Content");
//
// console.log(post.toString());

// Post: Post
// Content: Content

// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
//
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
//
// console.log(scm.toString());


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
