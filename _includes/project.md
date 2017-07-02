<link rel="stylesheet" href="/assets/css/projectPages.css">






<!-- i dont reall like this, perhaps just a link back to a general projects page? -->
<section id="Links" class="clearfix">
<a href="" class="button" onclick="goBack()">Go Back</a>

<script>
function goBack() {
    window.history.back();
}
</script>

</section>

<div>
<p>
<h1> Project Page </h1>

<div class="pTab"><h2> Project: {{ page.project.name | default: 'project name undefined' }}. </h2></div>
</p>
<br>

<pre class="normal">
{{ page.project.description | default: 'project description undefined' }}
</pre>

<div>
<h2> Links: </h2>
{% if page.project.project-Link | default:blank != blank %}
	<li>Source: <a href="{{page.project.project-Link}}">View</a></li>
{% endif %}
{% if page.project.download-Link | default:blank != blank %}
	<li>Download (Zip): <a href="{{page.project.download-Link}}">Download</a></li>
{% endif %}
</div>
<br>
<h2> Images: </h2>
<!--![project image](/assets/projects/{{ page.project.image }})-->
<div>
	{% for item in page.project.images %}
		<img src="/assets/projects/{{ item.loc }}" alt="{{item.desc}}" onError="style.display = 'none'; console.log('unable to load image {{ item.loc }}');">
		<br>
	{% endfor %}
</div>
</div>