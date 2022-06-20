import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./Page.css";

export const Page = () => {
  const [name, setName] = useState("");
  const [business_stage, setBusinessStage] = useState("");
  const [business_idea, setBusinessIdea] = useState("");
  const [age_of_establishment, setAgeOfEstablishment] = useState(0);
  const [product_service_offered, setPrimaryProductServiceOffered] =
    useState("");
  const [offered_to, setOfferedTo] = useState("");
  const [secondary_product_service_offered, setSecondaryProductServiceOffered] =
    useState("");
  const [processed_products, setProcessedProducts] = useState("");
  const [relevant_experience, setRelevantExperience] = useState(0);
  const [skill_training, setSkillTraining] = useState(false);
  const uniques = [
    "the entrepreneur's experience in this field",
    "innovative product/service",
    "high profit margin",
    "high growth potential",
    "superior customer support",
    "quality and affordable products/service",
    "high demand in the target market (forward linkage)",
    "abundant supply of raw materials (backward linkage)",
    "wide range of products/services",
    "robust value-chain of the business",
    "frequency of customer visits",
  ];
  const [usp, setUsp] = useState([]);
  const establishment_types = [
    "Factory",
    "Mill",
    "Stall",
    "Workshop",
    "Boutique",
    "Vehicle",
    "Centre",
    "Store",
    "Farm",
    "Plant",
    "Processing Unit",
    "Shop",
    "Vending cart",
    "Manufacturing unit",
  ];
  const [establishment_type, setEstablishmentType] = useState("");
  const [business_area, setBusinessArea] = useState("");
  const [business_locality, setBusinessLocality] = useState("");
  const [infra_ownership, setInfraOwnership] = useState("");
  const [establishment_area, setEstablishmentArea] = useState(0);
  const reasons = [
    "Nearness to market",
    "Good footfall",
    "Nearness to source of raw materials",
    "Nearness to targeted customer demographics",
    "Lesser competition around",
    "Access to permit/license of operate",
    "Nearness to suppliers",
    "Affordability (rent)",
    "No rental overheads",
    "Other such factors",
  ];
  const [reason_for_location, setReasonForLocation] = useState([]);
  const [market_research, setMarketResearch] = useState("Not conducted");
  const [primary_market, setPrimaryMarket] = useState("");
  const [customers, setCustomers] = useState("");
  const seasons = [
    "Consistent sales across all seasons",
    "Higher sales in festive seasons",
    "High sales in cropping/cultivation season",
    "High sales in peak seasons",
  ];
  const [seasonality, setSeasonality] = useState("");
  const competators = [
    "No similar goods/service provider in this locality",
    "Only a few similar goods/service providers in this locality",
    "Many similar goods/service providers in this locality",
  ];
  const [competition, setCompetition] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const avenues = [
    "Distribution of marketing material (pamphlets/flyers)",
    "storefront/business branding",
    "Seasonal discounts and offers",
    "Cross-promotion",
    "Digital Marketing",
    "Word of mouth ",
  ];
  const [marketing_avenues, setMarketingAvenues] = useState([]);
  const potentials = [
    "increasing the variety of product/service offering",
    "expanding the current offering to other geographies",
    "opening more outlets",
    "growing the scale of operation",
    "building value-chain integrations",
    "other allied revenue streams",
  ];
  const [scaleup_potential, setScaleUpPotential] = useState([]);

  const handleUniqueCheckbox = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setUsp([...usp, id]);
    } else {
      setUsp(usp.filter((item) => item !== id));
    }
  };

  const handleReasonCheckbox = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setReasonForLocation([...reason_for_location, id]);
    } else {
      setReasonForLocation(reason_for_location.filter((item) => item !== id));
    }
  };

  const handleAvenueCheckbox = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setMarketingAvenues([...marketing_avenues, id]);
    } else {
      setMarketingAvenues(marketing_avenues.filter((item) => item !== id));
    }
  };

  const handlePotentialCheckbox = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setScaleUpPotential([...scaleup_potential, id]);
    } else {
      setScaleUpPotential(scaleup_potential.filter((item) => item !== id));
    }
  };

  return (
    <div className="cont_1">
      <div className="cont_2">
        <h3>Details Form</h3>
        <TextField
          variant="outlined"
          label="Name"
          value={name}
          onInput={(e) => {
            setName(e.target.value);
          }}
          multiline={true}
        />
        <FormControl>
          <InputLabel id="business_stage_id">Business Stage</InputLabel>
          <Select
            labelId="business_stage_id"
            value={business_stage}
            onChange={(e) => {
              setBusinessStage(e.target.value);
            }}
            label="Select Stage"
            // sx={{ minWidth: 160 }}
            autoWidth
          >
            <MenuItem value="Start-up">Start-up</MenuItem>
            <MenuItem value="Scale-up">Scale-up</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          label="Business Idea"
          value={business_idea}
          onInput={(e) => {
            setBusinessIdea(e.target.value);
          }}
          multiline={true}
        />
        <br />
        <TextField
          variant="outlined"
          label="Age of Establishment"
          type="number"
          error={age_of_establishment < 0 || age_of_establishment > 100}
          value={age_of_establishment}
          onInput={(e) => {
            setAgeOfEstablishment(e.target.value);
          }}
        />
        <br />
        <TextField
          variant="outlined"
          label="Primary Product/Service Offered"
          value={product_service_offered}
          onInput={(e) => {
            setPrimaryProductServiceOffered(e.target.value);
          }}
          multiline={true}
        />
        <FormControl>
          <InputLabel id="offered_to_id">Offered To</InputLabel>
          <Select
            labelId="offered_to_id"
            value={offered_to}
            onChange={(e) => {
              setOfferedTo(e.target.value);
            }}
            label="Offered To"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            <MenuItem value="End Customers">End Customers</MenuItem>
            <MenuItem value="Wholesalers">Wholesalers</MenuItem>
            <MenuItem value="Distributors">Distributors</MenuItem>
            <MenuItem value="Retailers">Retailers</MenuItem>
          </Select>
        </FormControl>

        <br />
        <TextField
          variant="outlined"
          label="Secondary Product/Service Offered"
          value={secondary_product_service_offered}
          onInput={(e) => {
            setSecondaryProductServiceOffered(e.target.value);
          }}
          multiline={true}
        />
        <br />
        <TextField
          variant="outlined"
          label="Processed Products"
          value={processed_products}
          onInput={(e) => {
            setProcessedProducts(e.target.value);
          }}
          multiline={true}
        />
        <br />
        <TextField
          variant="outlined"
          label="Relevant Experience"
          value={relevant_experience}
          type="number"
          error={relevant_experience < 0 || relevant_experience > 100}
          onInput={(e) => {
            setRelevantExperience(e.target.value);
          }}
        />
        <br />
        <FormControl>
          <InputLabel id="skill_training_id">Skill training status</InputLabel>
          <Select
            labelId="skill_training_id"
            value={skill_training}
            onChange={(e) => {
              setSkillTraining(e.target.value);
            }}
            label="Skill Training"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            <MenuItem value={false}>No formal skill training,</MenuItem>
            <MenuItem value={true}>
              Has formal skill training and certificate.
            </MenuItem>
          </Select>
        </FormControl>

        <br />

        <FormControl>
          <FormLabel component="legend">Select unique features:</FormLabel>
          <FormGroup>
            {uniques.map((unique, index) => {
              return (
                <FormControlLabel
                  key={unique}
                  label={unique}
                  control={
                    <Checkbox
                      id={unique}
                      onChange={(e) => {
                        handleUniqueCheckbox(e);
                        console.log(usp);
                      }}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel id="establishment_type_id">
            Select establishment type
          </InputLabel>
          <Select
            labelId="establishment_type_id"
            value={establishment_type}
            onChange={(e) => {
              setEstablishmentType(e.target.value);
            }}
            label="Select Establishment Type"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            {establishment_types.map((establishment_type, index) => {
              return (
                <MenuItem value={establishment_type} key={establishment_type}>
                  {establishment_type}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <br />
        <TextField
          variant="outlined"
          label="Business Area"
          value={business_area}
          onInput={(e) => {
            setBusinessArea(e.target.value);
          }}
          multiline={true}
        />
        <FormControl>
          <InputLabel id="business_locality_id">
            Business locality
          </InputLabel>
          <Select
            labelId="business_locality_id"
            value={business_locality}
            onChange={(e) => {
              setBusinessLocality(e.target.value);
            }}
            label="Business Locality"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            <MenuItem value="Urban">Urban</MenuItem>
            <MenuItem value="Rural">Rural</MenuItem>
            <MenuItem value="Semi-Urban">Semi-Urban</MenuItem>
            <MenuItem value="Slum">Slum</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="infra_ownership_id">
            Infrastructure ownership
          </InputLabel>
          <Select
            labelId="infra_ownership_id"
            value={infra_ownership}
            onChange={(e) => {
              setInfraOwnership(e.target.value);
            }}
            label="Infrastructure Ownership"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            <MenuItem value="Rented">Rented</MenuItem>
            <MenuItem value="Leased">Leased</MenuItem>
            <MenuItem value="Self-owned">Self-owned</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
          variant="outlined"
          label="Establishment Area"
          value={establishment_area}
          type="number"
          onInput={(e) => {
            setEstablishmentArea(e.target.value);
          }}
          helperText="in sq. ft"
        />
        <br />
        <FormControl>
          <FormLabel component="legend">Select reasons for location:</FormLabel>
          <FormGroup>
            {reasons.map((reason, index) => {
              return (
                <FormControlLabel
                  key={reason}
                  label={reason}
                  control={
                    <Checkbox
                      id={reason}
                      onChange={(e) => {
                        handleReasonCheckbox(e);
                      }}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel id="market_research_id">Market research</InputLabel>
          <Select
            labelId="market_research_id"
            value={market_research}
            onChange={(e) => {
              setMarketResearch(e.target.value);
            }}
            label="Market Research"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            <MenuItem value="Not conducted">Not conducted</MenuItem>
            <MenuItem value="Market research has been conducted">
              Market research has been conducted
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="primary_market_id">Primary market</InputLabel>
          <Select
            labelId="primary_market_id"
            value={primary_market}
            onChange={(e) => {
              setPrimaryMarket(e.target.value);
            }}
            label="Primary Market"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            <MenuItem value="Local">Local</MenuItem>
            <MenuItem value="Regional">Regional</MenuItem>
            <MenuItem value="National">National</MenuItem>
            <MenuItem value="International">International</MenuItem>
          </Select>
        </FormControl>

        <br />
        <TextField
          variant="outlined"
          label="Customer Base"
          value={customers}
          onInput={(e) => {
            setCustomers(e.target.value);
          }}
          multiline={true}
        />
        <br />
        <FormControl>
          <InputLabel id="business_stage">Business Stage</InputLabel>
          <Select
            labelId="business_stage_id"
            value={seasonality}
            onChange={(e) => {
              setSeasonality(e.target.value);
            }}
            label="Seasonality"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            {seasons.map((season, index) => {
              return (
                <MenuItem value={season} key={season}>
                  {season}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel id="competition_id">Competition</InputLabel>
          <Select
            labelId="competition_id"
            value={competition}
            onChange={(e) => {
              setCompetition(e.target.value);
            }}
            label="Competition"
            sx={{ minWidth: 120 }}
            autoWidth
          >
            {competators.map((competator, index) => {
              return (
                <MenuItem value={competator} key={competator}>
                  {competator}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        <TextField
          variant="outlined"
          label="Supppliers"
          value={suppliers}
          onInput={(e) => {
            setSuppliers(e.target.value);
          }}
          multiline={true}
        />
        <br />
        <FormControl>
          <FormLabel component="legend">Select marketing avenues:</FormLabel>
          <FormGroup>
            {avenues.map((avenue, index) => {
              return (
                <FormControlLabel
                  key={avenue}
                  label={avenue}
                  control={
                    <Checkbox
                      id={avenue}
                      onChange={(e) => {
                        handleAvenueCheckbox(e);
                      }}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel component="legend">Select scale-up potential:</FormLabel>
          <FormGroup>
            {potentials.map((potential) => {
              return (
                <FormControlLabel
                  key={potential}
                  label={potential}
                  control={
                    <Checkbox
                      id={potential}
                      onChange={(e) => {
                        handlePotentialCheckbox(e);
                      }}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </div>
      {/* --------------------------- */}
      {/* Displpay */}
      {/* --------------------------- */}
      <div className="cont_3">
        <h3>About the Establishment</h3>
        <p>
          {name && business_stage && business_idea
            ? `${name} is looking to ${business_stage} their business of
          ${business_idea}.`
            : ""}{" "}
          {age_of_establishment > 0
            ? `This enterprise has been operational since ${age_of_establishment}
          years and has been serving its customers since then.`
            : ""}
        </p>
        <p>
          {product_service_offered && offered_to
            ? `This establishment offers products/services like-${product_service_offered} to ${offered_to}.`
            : ""}{" "}
          {secondary_product_service_offered
            ? `In addition, the enterprise shall also be involved in- ${secondary_product_service_offered}`
            : ""}
        </p>
        <p>
          {processed_products
            ? `Other products of the enterprise shall include- ${processed_products}`
            : ""}
        </p>
        <p>
          {relevant_experience > 0
            ? `${name} has relevant experience of ${relevant_experience} years in this field.`
            : ""}{" "}
          {skill_training
            ? "The entrepreneur has formal skill training and certificate in this field of work."
            : ""}
        </p>
        <p>
          {usp.length > 0
            ? `The enterprise is uniquely positioned because of its - ${usp.join(
                ", "
              )}`
            : ""}
        </p>
        <p>
          {establishment_type && business_locality && infra_ownership
            ? `The ${establishment_type} is located in ${business_locality} area of ${business_area} in a ${infra_ownership} property.`
            : ""}
        </p>
        <p>
          {establishment_area > 0
            ? `The size of the establishment is ${establishment_area} sq.ft.`
            : ""}
        </p>
        <p>
          {reason_for_location.length > 0
            ? `This locality is selected because of ${reason_for_location.join(
                ", "
              )}.`
            : ""}
        </p>
        <p>
          {market_research === "Not conducted"
            ? ""
            : `${market_research} and the range of products and target market has been
          identified after that.`}
        </p>
        <p>
          {primary_market
            ? `The enterprise shall focus on offering its products/services to
          ${primary_market} markets.`
            : ""}
        </p>
        <p>{customers ? `Our customers shall include- ${customers}` : ""}</p>
        <p>
          {seasonality
            ? `The nature of the business is such that we expect ${seasonality}.`
            : ""}
        </p>
        <p>
          {competition
            ? `Regarding competition, there are ${competition}.`
            : ""}
        </p>
        <p>
          {suppliers
            ? `The enterprise shall procure goods/raw materials from ${suppliers}.`
            : ""}
        </p>
        <p>
          {marketing_avenues.length > 0
            ? `Our marketing avenues to reach the targeted customers shall include-
          ${marketing_avenues.join(", ")}`
            : ""}
        </p>
        <p>
          {scaleup_potential.length > 0
            ? `The various foreseeable avenues of scaling up and growing the business
          in the foreseeable future include- ${scaleup_potential.join(", ")}.`
            : ""}
        </p>
      </div>
    </div>
  );
};
