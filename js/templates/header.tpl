<div class="container">
    <h2>Rijksmuseum Events</h2>
    <div class="row">
        <div class="input-group col-7 col-sm-6 col-md-4 col-lg-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="newDate">Date</label>
            </div>
            <select class="custom-select" id="newDate" >
                <% for(var i = 0; i < choose.length; i++){%>
                    <option value="<%= choose[i] %>" <%= choose[i] === today ? 'selected' : '' %>>
                        <%= choose[i] %>
                        <%= choose[i] === '2018-12-29' ? '&#9734;' : '' %>
                    </option>
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