<div class="container">
    <h2>Rijksmuseum Events</h2>
    <div class="row">
        <div class="input-group col-10 col-sm-8 col-md-6 col-lg-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="newDate"><%= translate('Date', lang)%></label>
            </div>
            <select class="custom-select" id="newDate" >
                <% for(var i = 0; i < choose.length; i++){%>
                    <option value="<%= choose[i] %>" <%= choose[i] === today ? 'selected' : '' %>>
                        <%= foramtDate(choose[i]) %>
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