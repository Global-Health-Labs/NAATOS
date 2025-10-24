# Risk Evaluation

## Overview

You can also [download a tabular version of this Risk Evaluation Table in the ```*.csv``` format](../tables/NAATOS-TB-V1-risk.csv).

## Lookup Matrices

### Probability

P1 (Probability of the Hazardous Situation Occurring) × P2 (Probability of the Hazardous Situation Leading to Harm) = Probability

Semi-Qualitative Probability Levels – Common Terms and Descriptors

- 5 = Frequent - Occurs more than 1 in 10 (likely to happen, often, frequent)
- 4 = Probable - Between 1 in 10 and 1 in 100
- 3 = Occasional - Between 1 in 100 and 1 in 1,000 (can happen, but not frequently)
- 2 = Remote - Between 1 in 1,000 and 1 in 10,000
- 1 = Improbable - Less than 1 in 10,000 (unlikely to happen, rare, remote)

{{ read_csv("docs/tables/lookup_probability.csv", na_filter = False) }}

### Risk Level

S (Severity) × P (Probability) = Risk Level

Qualitative Severity Levels – Common Terms and Descriptors

- 5 = Catastrophic Results in (or Potential of) death.
- 4 = Critical Results in (or Potential of) permanent impairment or life-threatening injury (excluding trivial impairment).
- 3 = Major Results in (or Potential of) injury or impairment requiring professional medical intervention.
- 2 = Minor Results in temporary injury or impairment not requiring professional medical intervention.
- 1 = Negligible Inconvenience or temporary discomfort.

{{ read_csv("docs/tables/lookup_risk.csv", na_filter = False) }}

## Risk Evaluation Table

{{ read_csv("docs/tables/NAATOS-TB-V1-risk.csv", na_filter = False) }}

<script>
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  if (cells[i].innerHTML == "5 - Frequent" || cells[i].innerHTML == "5 - Catastrophic" || cells[i].innerHTML == "High" || cells[i].innerHTML == "Unacceptable") {
    cells[i].className += " " + "risk5";
  } else if (cells[i].innerHTML == "4 - Probable" || cells[i].innerHTML == "4 - Critical") {
    cells[i].className += " " + "risk4";
  } else if (cells[i].innerHTML == "3 - Occasional" || cells[i].innerHTML == "3 - Serious" || cells[i].innerHTML == "Medium") {
    cells[i].className += " " + "risk3";
  } else if (cells[i].innerHTML == "2 - Remote" || cells[i].innerHTML == "2 - Minor" || cells[i].innerHTML == "Low" || cells[i].innerHTML == "Acceptable") {
    cells[i].className += " " + "risk2";
  } else if (cells[i].innerHTML == "1 - Improbable" || cells[i].innerHTML == "1 - Negligible") {
    cells[i].className += " " + "risk1";
  }
}
var tables = document.getElementsByTagName("table")
for (var i = 0; i < tables.length; i++ ){
    var header = tables[i].getElementsByTagName("th")
    if (header[0].innerHTML == "Name") {
        tables[i].id = "sortable-table"
    }
}
</script>
