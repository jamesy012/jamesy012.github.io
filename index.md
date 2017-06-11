---
layout: default
---

{% highlight c# linenos %}
			//ofofd.AcceptFiles = false;
			//ofofd.RootFolder = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

			TreeNode node = treeView1.Nodes.Add("test");
			node.Nodes.Add("test1");
			treeView1.Nodes.Add("test2");
			node.Expand();
{% endhighlight %}

 <h1> test 1 Header 1 </h1>
 # [](#header-1) test 2 Header 1

	<p> js test </p>
	
```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

... Test List
[Test link]({{ site.url }}Usefull_Links.html)

<p>
Link Test 2
[Link to another page](Usefull_Links).
</p>

<a herf {{ site.url }}Usefull_Links.html> link Test 3</a>

... Test Duck
![Duck image]({{ site.url }}/assets/images/myDuck.png)

</body>
</html>