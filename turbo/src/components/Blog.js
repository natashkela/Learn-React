import React, {Component} from 'react';
import Navbar from './Navbar.js';
import BreadcrumbSecondary from './BreadcrumbSecondary.js';
import BlogCategories from './BlogCategories.js'
import BlogCategoryContent from './BlogCategoryContent.js';
import Footer from './Footer.js';
class Blog extends Component {
  state = {
    title: "Blog",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"Blog"
     }
   ],
   blog_posts:[
     {
       categories:[1,3,5],
       blogId:1,
       title:"Title Of Single Post With Image Format",
       date:"15/02/2016",
       author:"Logan cee",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[1,2],
       blogId:2,
       title:"Title Of Single Post With Gallery Format",
       date:"15/02/2016",
       author:"Nata Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[4],
       blogId:3,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[2,5],
       blogId:4,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Natas Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[4],
       blogId:5,
       title:"Title Of Single Post With Audio Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[1,3,5],
       blogId:6,
       title:"Title Of Single Post With Image Format",
       date:"15/02/2016",
       author:"Logan cee",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[1,2],
       blogId:7,
       title:"Title Of Single Post With Gallery Format",
       date:"15/02/2016",
       author:"Nata Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[4],
       blogId:8,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[2,5],
       blogId:9,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Natas Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[4],
       blogId:10,
       title:"Title Of Single Post With Audio Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[1,3,5],
       blogId:11,
       title:"Title Of Single Post With Image Format",
       date:"15/02/2016",
       author:"Logan cee",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[1,2],
       blogId:12,
       title:"Title Of Single Post With Gallery Format",
       date:"15/02/2016",
       author:"Nata Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[4],
       blogId:13,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[2,5],
       blogId:14,
       title:"Title Of Single Post With Video Format",
       date:"15/02/2016",
       author:"Natas Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     },
     {
       categories:[4],
       blogId:15,
       title:"Title Of Single Post With Audio Format",
       date:"15/02/2016",
       author:"Tiko Vacheishvili",
       shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
     }
   ],
   blog_categories:[
     {
       categoryId:1,
       title:"Business",
       uniqueName:"business",
       isActive:false
     },
     {
       categoryId:2,
       title:"LifeStyle",
       uniqueName:"lifestyle",
       isActive:false
     },
     {
       categoryId:3,
       title:"Entertainment",
       uniqueName:"entertainment",
       isActive:false
     },
     {
       categoryId:4,
       title:"Technology",
       uniqueName:"technology",
       isActive:false
     },
     {
       categoryId:5,
       title:"Car Industry News",
       uniqueName:"car-industry-news",
       isActive:false
     }
   ]
  }
  render(){
    return (
      <div className="blog">
        <Navbar />
        <div className="rq-page-content">
          <div className="rq-content-block">
            <div className="container">
              <BreadcrumbSecondary breadcrumbs={this.state.breadcrumbs} title={this.state.title} />
              <div className="rq-blog-listing">
                <BlogCategories list={this.state.blog_categories}/>
                <BlogCategoryContent blogCategories={this.state.blogCategories} blogPosts={this.state.blog_posts}/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Blog;
