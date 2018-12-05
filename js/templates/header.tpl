<div class="container">
    <h2>Rijksmuseum Events</h2>
    <div class="row">
        <div class="input-group col-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="newDate">Date</label>
            </div>
            <select class="custom-select" id="newDate" >
                <% for(var i = 0; i < choose.length; i++){%>
                    <option value="<%= choose[i] %>" <%= choose[i] === today && 'selected' %> ><%= choose[i] %></option>
                <%}%>
            </select>
        </div>
        <span>
            <span class="changeLang <%= lang === 'nl' && 'changeLang_active' %>" data-lang="nl">Nl</span> 
            or 
            <span class="changeLang <%= lang === 'en' && 'changeLang_active' %>" data-lang="en">En</span>
        </span>
        
    </div>
</div>