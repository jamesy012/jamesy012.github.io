<link rel="stylesheet" href="/assets/css/projectPages.css">

<!-- i dont reall like this, perhaps just a link back to a general projects page? -->
<section id="Links" class="clearfix">
	<a href="" class="button" onclick="goBack()">Go Back</a>
	<!--<h1 style="padding-left:3.5em"> Project Page </h1>-->
    <center>
	<h1 style="padding-right:3.5em"> Project Page </h1>
    </center>
	<script>
		function goBack() {
			window.history.back();
		}
	</script>
	
</section>
<hr>
<div id="ProjectPage">
    <div id="ProjectName">
        <h2> Project: {{ page.project.name | default: 'project name undefined' }}. </h2>
    </div>

    
	<div id="Description">
        <h2 class="pTab"> Description: </h2>	
		{{ page.project.description | default: 'project description undefined' }}
	</div>
    
    <div id="Languages">
        {% if page.project.languages | default:blank != blank %}
            <h2 class="pTab"> Languages: </h2>
            {% for item in page.project.languages %}
                <li>{{ item.text }}</li>
            {% endfor %}
        {% endif %}
    </div>
    
	<div id="Images">
        {% if page.project.images | default:blank != blank %}
            <h2 class="pTab"> Images/Gifs: </h2>	
            {% for item in page.project.images %}
                <div id="ProjectExampleImage">
                    <center>
                    <img src="/assets/projects/{{ item.loc }}" alt="{{item.alt}}" onError="style.display = 'none'; console.log('unable to load image {{ item.loc }}');">
                    </center>
                    {% if item.desc | default:blank != blank %}
                        <p>
                            {{item.desc}}
                        </p>
                        {% endif %}
                </div>
        
            {% endfor %}
        {% endif %}
	</div>
    
    <div id="Links">        
        {% if page.project.links | default:blank != blank %}
            <h2 class="pTab"> Links: </h2>
            {% for item in page.project.links %}
                <li>{{ item.text }}: <a href="{{item.url}}">Link.</a></li>
            {% endfor %}
        {% endif %}
	</div>
    
    <div id="similar projects">
        {% if page.project.other | default:blank != blank %}
            <h2 class="pTab"> Other: </h2>
            {% for item in page.project.other %}
                <li>{{ item.text }}: <a href="\pages\Projects\{{item.url}}">Link.</a></li>
            {% endfor %}
        {% endif %}
    </div>
</div>