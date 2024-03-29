generateAPARef <- function(df, dropdown=T) {
  i=1
  # loop through each row of the dataframe
  # extract the bibliographic fields from the current row
  author <- df$Authors[i]
  year <- df$Year[i]
  title <- df$Title[i]
  journal <- df$Source[i]
  volume <- df$Volume[i]
  issue <- df$Issue[i]
  num <- df$ArtNo[i]
  abstract <- df$Abstract[i]
  page_start <- df$`Page start`[i]
  page_end <- df$`Page end`[i]
  pages <- ""
  doi <- df$DOI[i]
  url <- df$URL[i]
  number <- df$seq[i]
  keywords <- df$Keywords[i]
  # handle missing fields
  if (is.na(author)) { author <- "" }
  if (is.na(year)) { year <- "" }
  if (is.na(title)) { title <- "" }
  if (is.na(journal)) { journal <- "" }
  if (is.na(volume)) { volume <- "" }
  if (is.na(issue)) { issue <- "" }
  if (is.na(abstract)) { abstract <- "" }
  if (is.na(num)) { num <- "" }
  if (!is.na(page_start)) {
    if (!is.na(page_end)) {
      pages <- paste0(page_start,"-",page_end) 
    } else {
      pages <- page_start
    }
  }
  if (!is.na(doi)) {
    url <- doi 
  } else if (is.na(url)) {
    url <- ""
  }
  if (!is.na(keywords)) {
    keywords <- stringr::str_to_lower(stringr::str_split(keywords,"; ")[[1]])
  } else {
    keywords <-c()
  }
  
  # format the bibliographic entry in APA style
  entry <- ""
  if (author != "") { 
    entry <- paste(entry, author, " ", sep = "")
    entry <- stringr::str_replace(entry,"López-Pernas, S.","<b>López-Pernas, S.</b>")
    
  }
  if (year != "") { entry <- paste(entry, "(" , year , ")", sep = "") }
  if (title != "") { entry <- paste(entry, ". ", title, sep = "") }
  if (journal != "") { entry <- paste(entry, ". <i>", journal,"</i>", sep = "") }
  if (volume != "") { entry <- paste(entry, ", vol. ", volume, sep = "") }
  if (issue != "") { entry <- paste(entry,ifelse(volume != "",""," "), "(", issue, ")", sep = "") }
  if (num != "") { entry <- paste(entry, ", art. no. " , num, sep = "") }
  if (pages != "") { entry <- paste(entry, ", pp. " , pages , sep = "") }
  if (url != "") { 
    if (!is.na(doi)) {
      entry <- paste(entry, ". doi: <a target='_blank' href='https://doi.org/",url,"'>" , url , "</a>" ,sep = "") 
    } else {
      entry <- paste(entry, ". <a target='_blank' href='",url,"'>" , url , "</a>" ,sep = "") 
      
    }
  } 
  
  entry <- paste0(entry,".")
  if (dropdown & abstract != "") { 
    entry <- paste(entry, " <button style='position: absolute;left: -35px; top: 0;line-height: 1.2;border-width: 0px;' type='button' data-bs-toggle='collapse' data-bs-target='#ref-",number,"'   aria-expanded='false'  aria-controls='ref-",number,"' class='btn btn-sm btn-success'>+</button>", sep = "")
    kws <-""
    for (kk in 1:length(keywords)) {
      kws <- paste0(kws,"<span style='margin-right: 2px;' class='badge rounded-pill bg-info'>",keywords[kk],"</span>")
    }
    entry <- paste(entry,"<div class='collapse' id='ref-",number,"'>
                     <p class=' small'><br/>" , 
                   abstract , 
                   "</p><p>",kws,"</p><br/>"," </div>", sep = "") 
  }
  
  entry <- paste("<li style='position:relative;margin-bottom:0.8rem;list-style:none;'>", entry, "</li>", sep = "")
  
  entry
}