var numberOfClicks=0;
function postLiked()
{
    document.getElementById("likeBlog").innerHTML="Liked!";
    numberOfClicks +=1;
    if(numberOfClicks!=0)
    {
        if(numberOfClicks==1)
        {
            document.getElementById('commentCount').innerHTML=numberOfClicks+" person like this!";
        }
        else
        {
            document.getElementById('commentCount').innerHTML=numberOfClicks+" people have liked this!";

        }
    }
}
function addComment()
{
    var comment=document.getElementById('commentContent').value;
    var node=document.createElement("div");
    node.innerHTML="<br>";
    node.style.backgroundColor="#fff";
    node.style.margin="10px 10px 10px 10px";
    node.style.padding="0 20px 20px 10px";
    var textnode=document.createTextNode(comment);
    node.appendChild(textnode);
    if(comment==="")
    {
        alert("Please add a comment");
    }
    else
    {
        var latestComment=document.getElementById("commentBox");
        latestComment.insertBefore(node,latestComment.childNodes[0]);
    }

}
function editPost()
{
    document.getElementById('blogBody').contentEditable='true';
    document.getElementById('blogTitleNew').contentEditable='true';
    document.getElementById('blogBody').style.border="2px solid pink";
    document.getElementById('blogTitleNew').style.border="2px solid pink";
    document.getElementById("editPostClick").style.display="none";
         document.getElementById("btnSave").style.display="block";
}
function saveChange()
{
    document.getElementById("editPostClick").style.display="block";
         document.getElementById("btnSave").style.display="none";
    document.getElementById('blogBody').contentEditable='false';
    document.getElementById('blogTitleNew').contentEditable='false';
    document.getElementById('blogBody').style.border="none";
    document.getElementById('blogTitleNew').style.border="none";
}




