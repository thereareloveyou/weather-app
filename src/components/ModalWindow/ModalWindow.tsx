import { useCallback, useState } from "react";
import { Button } from "../Button/Button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/modal";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { getSearchQuery, searchActions } from "../../store/search.slice";
import { getCurrentPolution, getCurrentWeather, globalActions } from "../../store/global.slice";
import { Suggestions } from "../../interfaces/types";

export const ModalWindow = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch<AppDispath>();
  const res = useSelector((s: RootState) => s.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    handleSearch(value);
  };

  const handleSearch = useCallback(
    debounce((value) => {
      dispatch(getSearchQuery(value));
    }, 200),
    []
  );

  const handleSelect =
    ({ latitude, longitude, name }: Suggestions) =>
    () => {
      setOpen(false);
      setValue("");
      dispatch(globalActions.addNewParams({ name: name, longitude: longitude, latitude: latitude }));
      dispatch(getCurrentWeather({ latitude, longitude }));
      dispatch(getCurrentPolution({ latitude, longitude }));
      dispatch(searchActions.clearData());
    };

  return (
    <>
      <Button onClick={() => setOpen(true)} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search city..." onChange={handleChange} value={value} />
        <CommandSeparator />
        <CommandList>
          <CommandGroup heading="Suggestions">
            {res.status === "NOT" && <CommandEmpty>No search result</CommandEmpty>}
            {!res.search.results.length &&
              value == "" &&
              res.suggestions.map((suggestion: Suggestions, i) => (
                <CommandItem key={i} onSelect={handleSelect(suggestion)}>
                  {suggestion.name}
                  {suggestion?.admin1 ? ", " + suggestion?.admin1 : ""}
                  {suggestion?.country ? ", " + suggestion?.country : ""}
                </CommandItem>
              ))}
            {res.status === "OK" &&
              res.search.results.map((suggestion: Suggestions, i) => (
                <CommandItem key={i} onSelect={handleSelect(suggestion)}>
                  {suggestion.name}
                  {suggestion?.admin1 ? ", " + suggestion?.admin1 : ""}
                  {suggestion?.country ? ", " + suggestion?.country : ""}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
