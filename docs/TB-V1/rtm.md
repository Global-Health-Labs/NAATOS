# Requirements Traceability Matrix (RTM)

## Overview

The Requirements Traceability Matrix (RTM) was developed to guide development of the NAATOS diagnostic system at GHL. These requirements should be adapted to the market and product opportunities specific to the context of any future development of this technology.

The RTM contains NAATOS-specific references and abbreviations. References to **Product** denote the entire NAATOS system. The modular subsystems are abbreviated as follows:

1. **SCC** is an abbreviation for Sample Collection Consumable, which is the swab used to collect a sample dorsal tongue swab specimen.
2. **STC** is an abbreviation for Sample Tube Consumable, which is the dropper tube used to process the swab sample during sample preparation.
3. **SPM** is an abbreviation for Sample Prep Module, which is the portable instrument used to process the swab sample after it is loaded into the sample tube.
4. **TC** is an abbreviation for Test Consumable, which is the laminated cartridge that contains the assay chemistry.
5. **PM** is an abbreviation for Power Module, which is the portable instrument used to operate the test consumable after it is loaded with processed sample by providing heating and timing.

You can explore sections of the RTM as arranged by [Market Requirements (MRs)](#arranged-by-market-requirement-mr) below and the [Supporting Evidence](#supporting-evidence) used to develop them and validate the MRs, as well as the traces to Product Requirements (PRs) and Subsystem Requirements (SRs) derived from each MR.

Or, you can [download a tabular version of the full RTM in the ```*.csv``` format](../tables/NAATOS-TB-V1-rtm.csv).

<!-- ## Requirements Traceability Matrix

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm.csv", na_filter = False) }} -->

## Requirements

### Arranged by Market Requirement (MR)

#### Enable health care workers in primary health care to confirm the presence of pulmonary M. tuberculosis at the peripheral level during the same clinical encounter for effective linkage to patient care

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-29
- ***Jobs to be done:*** Enable health care workers in primary health care to confirm the presence of pulmonary M. tuberculosis at the peripheral level during the same clinical encounter for effective linkage to patient care.
- ***Current challenges:*** People with TB are lost to follow-up.
- ***Desired capabilities:*** Maximize the likelihood of effective linkage to patient care for individuals who receive a TB diagnostic test during the same clinical encounter.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr29.csv", na_filter = False) }}

#### Availability

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-19
- ***Jobs to be done:*** Access a TB diagnostic solution that is readily available when and where required.
- ***Current challenges:*** Limited availability of diagnostics minimizes the effectiveness of TB programs.
    - Molecular testing in target countries (India, South Africa) is largely centralized.
    - Distance to clinics and associated transport costs for people seeking care.
    - There is a gap in access to molecular diagnostic services at lower-level facilities (L1 & L2). These facilities are majorly dependent on conventional microscopy. Samples are collected from L1 & L2 facilities and transported for molecular testing at higher level facilities. (Kenya)
        - “Out of the 90% of presumptive cases that are referred for TB testing at other facilities only 30% reach those facilities”
- ***Desired capabilities:*** Increase the availability of TB testing at point-of-care settings in primary health care.
    - “Make in India” policy encourages manufacture within country.
    - The stakeholders expect NAATOS to be consistently available once introduced into the market
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr19.csv", na_filter = False) }}

#### Compliance with local rules and regulations

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-21
- ***Jobs to be done:*** Adhere to local rules and regulations for health care and TB testing.
- ***Current challenges:*** Limited availability of TB diagnostic solutions that meet local rules and regulations.
    - WHO-approved rapid diagnostics (WRDs) not available at L0/L1.
- ***Desired capabilities:*** Adhere to local rules and regulations.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr21.csv", na_filter = False) }}

#### Affordability

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-18
- ***Jobs to be done:*** Provide an affordable diagnostic solution for TB testing that is independent of patient volumes and capital investment.
- ***Current challenges:*** Expensive solutions limit accessibility.
    - Cost of care (India – in private sector)
    - Patient-related financial challenges (Kenya)
        - “Patients generally have challenges (financial) such as lack of means for transport or bus fare and when they hear that they are being referred to a higher facility, they will lose hope”.
- ***Desired capabilities:*** Optimize the cost-effectiveness of TB testing at point-of-care settings in primary health care.
    - Cost per test:
        - India – Respondents express a desire for a low-cost test (with suggested price points ranging from $2 to $5)
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr18.csv", na_filter = False) }}

#### Durability under transport and storage

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-25
- ***Jobs to be done:*** Ensure the TB diagnostic solution maintains its integrity during transport and storage, ensuring reliable performance at point of care settings in primary health care.
- ***Current challenges:*** Limited availability of TB diagnostic solutions that ensure reliability without requiring storage and transport measures.
    - Maintaining cold chain in transport continues to be a challenge although there have been improvements in recent years due to increased vaccination drives. (India)
    - Refrigeration (for reagent storage) may not be available in many L0-L1 facilities. (India)
    - Temperatures can range from -10°C to + +50°C; humidity levels can be as high as 90% in some regions (India)
- ***Desired capabilities:*** Ensure reliability with durability during transport and storage at point-of-care settings in primary health care.
    - Transportation:
        - India – Transportation without refrigeration is ideal.
        - Kenya – Transportation of kits is the responsibility of Kenya Medical Supplies Agency. Transportation under refrigeration is available from privately contracted companies.
    - Storage:
        - Kenya – The temperatures are usually between 22-25 °C in the country
        - Majority of facilities with extreme temperature conditions have refrigerators for storage of reagents
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr25.csv", na_filter = False) }}

#### Compatibility with health infrastructure

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-20
- ***Jobs to be done:*** Integrate a TB diagnostic solution with the healthcare infrastructure at point-of-care settings in primary health care.
- ***Current challenges:*** Reliance on uninterrupted electricity and space.
    - Power outages have become infrequent and no longer present a challenge. (India)
    - Majority of L1 facilities lack onsite laboratory. Inappropriate sample packaging compromising quality (Kenya)
- ***Desired capabilities:*** Increase compatibility with health infrastructure at point-of-care settings in primary health care.
    - Power – Battery operated.
        - India – Power outages have become infrequent and no longer present a major challenge in most high-burden settings, but the battery module would allow the test to be used in point of care settings (like active case finding in community)
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr20.csv", na_filter = False) }}

#### Conformity with clinical workflows

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-24
- ***Jobs to be done:*** Integrate a TB diagnostic solution seamlessly with existing clinical workflows to ensure efficient use.
- ***Current challenges:*** Disruption to clinical workflows leading to hesitance in adoption.
    - Staff shortages:
        - At all levels of health care workers. (India)
        - At L1 & L2, need to increase number of healthcare workers at peripheral facilities, currently a clinician or nurse is responsible for clinical services and admin services (Kenya)
    - Many people with symptoms are unable to produce sample.
    - Sample transport can/does lead to sample losses and degradation.
    - Service integration at facility level is key (HIV – TB). Patients not tracked and guided at the facility may not reach the next point of care, e.g., for sample collection and loss to follow up. (Kenya)
    - Sample collection at first encounter is key. Patient may not return to facility due to challenges such long distances and costs incurred in seeking care e.g., lack bus fare. (Kenya)
- ***Desired capabilities:*** Conform to established clinical workflows of TB testing at point-of-care settings in primary health care.
    - Time to result – Stakeholders express a strong interest in the 60 min turnaround time which can materially impact the high loss to follow up between sample collection and test results.
        - India – A 60-min turnaround time is deemed acceptable for Indian settings. Strong implementation and algorithm guidance to support earlier testing in the patient workflow, ensuring that test & treatment can take place in same visit.
        - Kenya – NAATOS will be within 1 hour or less compared to the existing platforms. Stakeholders view NAATOS as a rapid test with expectation of rapid results. Stakeholders anticipate that time to result for
    - Sample preparation – There should be no manual sample purification.
      - Kenya – Stakeholders expect further clarity on sample. preparation procedures and reagent s involved and timing
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr24.csv", na_filter = False) }}

#### Scalability to support patient throughput

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-32
- ***Jobs to be done:*** Efficiently manage a range of patient volumes.
- ***Current challenges:*** Patient volumes vary in POC settings at PHC, and lower volumes can minimize the cost-effectiveness of existing tools.
    - Long queues at clinic (India – not a significant challenge in rural facilities)
    - Long turnaround times, which in turn lead to high losses to follow up and delayed treatment initiation (India, Kenya)
    - Opening and closing times at peripheral facilities affect services and clinical work. Most peripheral facilities start their clinical services late which affects the waiting of service and waiting times for patients. (Kenya)
- ***Desired capabilities:*** Efficiently manage a range of patient volumes with a scalable and adaptable system.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr32.csv", na_filter = False) }}

#### Usability

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-33
- ***Jobs to be done:*** Easily operate a TB diagnostic solution in point of care settings at primary health care without specialized training and education.
- ***Current challenges:*** Operating current systems in POC settings at PHC requires specialized training and education.
a. Limited availability of skilled workforce. b. Existing molecular technologies (especially Xpert) have limited potential to be decentralized due to complex operational requirement and cost.
- ***Desired capabilities:*** Easily operate a TB diagnostic solution in POC at PHC without the need for specialized training and education.
    - Most stakeholders believe that the test could aid in task-shifting because it could be used by all cadre levels after a training of 1-2 days. (India)
    - Walk away operation:
        - India – Consolidation of sample preparation module and heat module – the user shouldn’t have to do anything else after adding the swab to the sample preparation tube.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr33.csv", na_filter = False) }}

#### Reliability

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-30
- ***Jobs to be done:*** Depend on reliable TB test results for confident decision making without requiring maintenance and calibration.
- ***Current challenges:*** Current systems require regular maintenance and calibration, impacting the reliability of TB test results.
    - Poor equipment maintenance contributes to frequent underutilization of molecular diagnostic facilities.
    - There is a recognized need to challenge the Xpert monopoly due to challenges related to poor equipment maintenance, cartridge shortages and lack of portability.
- ***Desired capabilities:*** Depend on reliable TB test results for confident decision-making without requiring frequent maintenance and calibration.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr30.csv", na_filter = False) }}

#### Confidence in test performance (tongue swab)

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-22
s to be done:*** Diagnose individuals for TB confidently with high performance accuracy, which for near POC is a clinical sensitivity ≥ 80% and clinical specificity ≥ 98% in populations greater than 12 years of age undergoing symptomatic screening, with signs and symptoms of pulmonary TB, from tongue swab specimens.
- ***Current challenges:*** Varying performance reliant on expensive equipment and/or specialized skills.
a. The low sensitivity of microscopy means a significant number of cases are missed (Kenya).
- ***Desired capabilities:*** Increase the performance accuracy of TB testing at point-of-care settings in primary health care.
    - Sensitivity –
        - India – Public and private stakeholders shared that sensitivity rates of 70-80% would be enable the test to be placed as a preferred first line test in NTEP’s decentralized molecular testing strategy. (India)
        - Kenya – Stakeholders expressed the need for a molecular test to be deployed at lower-level facilities to increase case detection.
    - Target population –
        - India – Many stakeholders expressed a hope that the test could be used in pediatric populations.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr22.csv", na_filter = False) }}

#### Confidence in test quality

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-23
- ***Jobs to be done:*** Trust in the quality of a TB diagnostic solution.
- ***Current challenges:*** Existing challenges in TB diagnostics creates a trust gap in the quality of available diagnostic solutions.
    - Non-actionable (indeterminate + invalid) results should be <5%
- ***Desired capabilities:*** Develop a TB diagnostic solution that instils an unwavering trust in quality, ensuing accurate and reliable results for effective decision-making in the continuum of care.
    - Internal Control – Internal control accounting for any processing errors (sample application to strip reporting of results)
    - External control – External control accounting for any processing errors:
        - Swab-based to account for processing errors
        - Sample prep to results
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr23.csv", na_filter = False) }}

#### Confidence in test safety

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-34
- ***Jobs to be done:*** Ensure the safety of patients and health care providers during TB testing.
- ***Current challenges:*** Safety concerns leading to hesitancy in adoption.
- ***Desired capabilities:*** Eliminate safety concerns for TB testing at point-of-care settings in primary health care.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr34.csv", na_filter = False) }}

#### Robustness to environmental conditions

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-31
- ***Jobs to be done:*** Depend on reliable TB test results for confident decision making under diverse environmental conditions.
- ***Current challenges:*** POC settings at PHC have diverse environmental conditions, adding complexity to the testing experience and reliability requirements.
    - Temperatures can range from -10°C to + +50°C; humidity levels can be as high as 90% in some regions (India)
- ***Desired capabilities:*** Produce reliable TB test results for confident decision-making under diverse environmental conditions.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr31.csv", na_filter = False) }}

#### Longevity

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-27
- ***Jobs to be done:*** Minimize the need for frequent replacement of a TB diagnostic solution.
- ***Current challenges:*** Frequent replacement of components leads to logistical and operational challenges.
    - Availability of commodities is a major challenge with stock-outs of cartridges (Xpert) and chips (Truenat) due to procurement and supply chain failures are frequent (India, Kenya)
    - Shipping is no longer costly to most parts of the country, but other logistic planning continues to be poor; kit procurement would ideally be done 1-2 times a year (India)
- ***Desired capabilities:*** Minimize the need for frequent replacement, ensuring a robust and durable diagnostic solution.
    - Shelf life:
        - India – Ideal (24 months), Acceptable (18 months)
        - Kenya – The product should be 75% of the shelf life at the time of delivery in Kenya or in-country or at the warehouse.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr27.csv", na_filter = False) }}

#### Environmental responsibility

- ***Status:*** <span style="color: green;">Accepted</span>
- ***ID:*** MR-26
- ***Jobs to be done:*** Minimize the environmental impact of using a TB diagnostic solution.
- ***Current challenges:*** Environmental concerns associated with diagnostic solutions and impact on environment for hazardous waste, energy efficient equipment, and sustainable material sourcing.
- ***Desired capabilities:*** Minimize the environmental impact for TB testing.
- ***Sub-Requirements:***

{{ read_csv("docs/tables/NAATOS-TB-V1-rtm-mr26.csv", na_filter = False) }}

#### Minimal instrumentation

- ***Status:*** <span style="color: orange;">Deferred</span>
- ***ID:*** MR-28
- ***Jobs to be done:***
- ***Current challenges:***
- ***Desired capabilities:***

### Supporting Evidence

- [High priority target product profiles for new tuberculosis diagnostics: report of a consensus meeting](https://www.who.int/publications/i/item/WHO-HTM-TB-2014.18){:target="_blank"}
    - Author: World Health Organization
    - Detail: Report of a consensus meeting, 28-29 April 2014, Geneva, Switzerland
    - Date: 28-29 April 2014
- [WHO TPP Public Consultation for a TB Diagnostic Test for Peripheral Settings](https://www.who.int/news-room/articles-detail/public-consultation-for-the-target-product-profile-tb-diagnostic-tests-for-peripheral-settings){:target="_blank"}
    - Author: World Health Organization
    - Detail: Public consultation - survey conducted by the WHO Global TB Programme to inform the updated TPP.
    - Date: August 2023
- [NAATOS TB V1 VOC Assessment](./reports/NAATOS%20TB%20V1%20Formative%20Feedback%201%20VOC%20and%20Market%20Access%20MAA.pdf)
    - Author: Market Access Africa
    - Detail: The voice of customer (VOC) analysis explored key thematic priorities (market landscape, policy considerations & regulatory pathways, product insights, and deployment considerations) for a successful launch in the public and private sector in 4 first tier countries and 4 second tier countries.
        - First tier countries - India, Nigeria, South Africa, Kenya
        - Second tier countries - DRC, Uganda, Zimbabwe, and Botswana
    - Date: December 2023
- [NAATOS TB V1 VOC Assessment Second Tier Countries](./reports/NAATOS%20TB%20V1%20Formative%20Feedback%201%20VOC%20and%20Market%20Access%20Second%20Tier%20Countries%20MAA.pdf)
    - Author: Market Access Africa
    - Detail: The voice of customer (VOC) analysis explored key thematic priorities (market landscape, policy considerations & regulatory pathways, product insights, and deployment considerations) for a successful launch in the public and private sector in 4 first tier countries and 4 second tier countries.
        - First tier countries - India, Nigeria, South Africa, Kenya
        - Second tier countries - DRC, Uganda, Zimbabwe, and Botswana
    - Date: December 2023
- [NAATOS TB V1 Regulatory Pathway Assessment](./reports/NAATOS%20TB%20V1%20Formative%20Feedback%201%20Regulatory%20MAA.pdf)
    - Author: Market Access Africa
    - Detail: The voice of customer (VOC) analysis explored key thematic priorities (market landscape, policy considerations & regulatory pathways, product insights, and deployment considerations) for a successful launch in the public and private sector in 4 first tier countries and 4 second tier countries.
        - Authors: Market Access Africa
        - First tier countries - India, Nigeria, South Africa, Kenya
        - Second tier countries - DRC, Uganda, Zimbabwe, and Botswana
    - Date: December 2023

<script>
var tbodys = document.getElementsByTagName("tbody");
for (var i = 0; i < tbodys.length; i++) {
    var rows = tbodys[i].getElementsByTagName("tr")
    var last = 0;
    for (var j = 1; j < rows.length; j++) {
        var cells = rows[j].getElementsByTagName("td")
        if (rows[j].cells[0].innerHTML != "") {
            rows[last].cells[0].rowSpan = j - last;
            rows[last].cells[1].rowSpan = j - last;
            rows[last].cells[2].rowSpan = j - last;
            last = j;
        } else if (j == rows.length - 1) {
            rows[last].cells[0].rowSpan = j - last + 1;
            rows[last].cells[1].rowSpan = j - last + 1;
            rows[last].cells[2].rowSpan = j - last + 1;
            rows[j].cells[0].remove();
            rows[j].cells[0].remove();
            rows[j].cells[0].remove();
        } else {
            rows[j].cells[0].remove();
            rows[j].cells[0].remove();
            rows[j].cells[0].remove();
        }
    }
}
</script>
