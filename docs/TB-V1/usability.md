# Usability

## :material-map-marker-question-outline: Formative Feedback - Phase 1

Market Access Africa (MAA) assisted Global Health Labs (GHL) with the NAATOS TB V1 Formative Feedback - Phase 1 work, in which a voice of customer (VOC) analysis explored key thematic priorities (market landscape, policy considerations & regulatory pathways, product insights, and deployment considerations) for a successful launch in the public and private sector in four first-look countries and four second-look countries.

<div class="grid cards" markdown>

- First-look countries

    ---

    - India
    - Kenya
    - Nigeria
    - South Africa

- Second-look countries

    ---

    - Botswana
    - Democratic Republic of Congo (DRC)
    - Uganda
    - Zimbabwe

</div>

### Voice of the Customer and Market Analysis

The MAA reports on [NAATOS TB V1 Formative Feedback Phase 1 on VOC and Market Analysis for four first-look countries](./reports/NAATOS-TB-V1_Formative-Feedback-1_VOC-and-Market-Access_MAA.pdf) and [four second-look countries](./reports/NAATOS-TB-V1_Formative-Feedback-1_VOC-and-Market-Access-Second-Tier-Countries_MAA.pdf) outline key development milestones and market entry strategies in those countries.

### Regulatory Pathway Assessment

The MAA report on [NAATOS TB V1 Formative Feedback Phase 1 on Regulatory Pathways](./reports/NAATOS-TB-V1_Formative-Feedback-1_Regulatory_MAA.pdf) provides high-level insights from interviews with global regulatory exerts on the SRA pathway.

The ACT-IVD report on [NAATOS TB V1 Regulatory Strategy](./reports/NAATOS-TB-V1_Regulatory-Assessment-and-Strategy_ACT-IVD.pdf) is also available as a more detailed follow-up on the regulatory topic.

## :material-doctor: Formative Feedback - Phase 2

MArket Access Africa (MAA) also assisted Global Health Labs (GHL) with the NAATOS TB V1 Formative Feedback - Phase 2 work, in which clinic visits in Kenya and South Africa were conducted to gather end-user [requirements](./rtm.md) in clinic settings. The [Voice of the Customer analysis](#voice-of-the-customer-and-market-analysis) produced in Phase 1 highlighted the need for this work.

### Clinic Visits and Health Care Worker Interviews

The MAA report on [NAATOS TB V1 Formative Feedback Phase 2](./reports/NAATOS-TB-V1_Formative-Feedback-2_MAA.pdf) provides a detailed usability assessment of an early prototype NAATOS TB V1 system.

<div class="grid cards" markdown>

- Objectives

    ---

    - Assess the usability of the NAATOS TB device in primary healthcare settings
    - Identify the clinic characteristics, roles, needs, and challenges faced by potential users in TB testing processes
    - Provide actionable recommendations for effective integration of the NAATOS device into clinic workflows

- Methodology

    ---

    - Collect formative feedback with 41 health workers on health facility characteristics, workflow, usability and end-user requirements.
    - Visit 13 health facilities in primary health settings within South Africa and Kenya.
    - Take systematic approach to collect and analyze data on NAATOS' usability and user requirements
    - Conduct surveys, audio- and video-recorded interviews.

</div>

Explore the feedback summarized in the table below or [download it in the ```*.csv``` format](../tables/NAATOS-TB-V1-usability.csv).

{{ read_csv("docs/tables/NAATOS-TB-V1-usability.csv", na_filter = False) }}

<script>
var tbodys = document.getElementsByTagName("tbody");
for (var i = 0; i < tbodys.length; i++) {
    var rows = tbodys[i].getElementsByTagName("tr")
    var last = 0;
    for (var j = 1; j < rows.length; j++) {
        var cells = rows[j].getElementsByTagName("td")
        if (rows[j].cells[0].innerHTML != "") {
            rows[last].cells[0].rowSpan = j - last;
            last = j;
        } else if (j == rows.length - 1) {
            rows[last].cells[0].rowSpan = j - last + 1;
            rows[j].cells[0].remove();
        } else {
            rows[j].cells[0].remove();
        }
    }
}
</script>
