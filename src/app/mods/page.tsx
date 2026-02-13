import Footer from "@/components/footer";
import ModTIle from "@/components/modTIle";
import Navbar from "@/components/navbar";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <h1 className="text-6xl m-3">My Geode Mods: </h1>
        <ul className="flex gap-4 flex-wrap justify-center m-5">
            <ModTIle
              icon="https://github.com/dulakgg/HELL-integration/blob/main/logo.png?raw=true"
              title="HELL Integration"
              desc="Hardest Easy List Integration mod"
              alt="HELL Icon"
              linkGitHub="https://github.com/dulakgg/HELL-integration"
              unreleased
              unfinished
              gdVersion="2.2074"
            />
            <ModTIle
              icon="https://github.com/dulakgg/List-Counter/blob/main/logo.png?raw=true"
              title="List Counter"
              desc="Counts in how many lists a level is in"
              alt="List Counter Icon"
              linkGitHub="https://github.com/dulakgg/List-Counter"
              gdVersion="2.2074"
              linkGeode="https://geode-sdk.org/mods/dulak.list_counter"
              wIP
              unfinished
            />
            <ModTIle
              icon="https://github.com/dulakgg/Wraith-codes/blob/main/logo.png?raw=true"
              title="Wraith Helper"
              desc="Wraith codes tracker"
              alt="Wraith Helper Icon"
              linkGitHub="https://github.com/dulakgg/Wraith-codes"
              gdVersion="2.2074"
              linkGeode="https://geode-sdk.org/mods/dulak.wraith-help"
              unfinished
            />
            <ModTIle 
              icon="https://github.com/dulakgg/Lock-In/blob/main/logo.png?raw=true"
              title="Lock In"
              desc="Prevents accidental level exits"
              alt="Lock In Icon"
              linkGitHub="https://github.com/dulakgg/Lock-In"
              gdVersion="2.2074"
              linkGeode="https://geode-sdk.org/mods/dulak.lock_in"
            />
            <ModTIle 
              icon="https://github.com/dulakgg/Active-Choice-Limiter/blob/main/logo.png?raw=true"
              title="Active Choice Limiter"
              desc="Force all levels to open a chosen Level ID"
              alt="Active Choice Limiter Icon"
              linkGitHub="https://github.com/dulakgg/Active-Choice-Limiter"
              gdVersion="2.2074"
              linkGeode="https://geode-sdk.org/mods/dulak.active_choice_limiter"
            />
            <ModTIle 
              icon="https://github.com/dulakgg/Denabler/blob/main/logo.png?raw=true"
              title="Denabler"
              desc="Bulk enable/disable all mods at once"
              alt="Denabler Icon"
              linkGitHub="https://github.com/dulakgg/Denabler"
              gdVersion="2.2074"
              linkGeode="https://geode-sdk.org/mods/dulak.denabler"
              superseded
              linkGeode2="https://geode-sdk.org/mods/bluetoadmaker.modprofiles"
            />
            <ModTIle 
              icon="https://github.com/dulakgg/Auto-Be-Gone-Fix/blob/main/logo.png?raw=true"
              title="Auto Be Gone Fix"
              desc="Filters out auto levels from easy searches"
              alt="Auto Be Gone Fix Icon"
              linkGitHub="https://github.com/dulakgg/Auto-Be-Gone-Fix"
              gdVersion="2.2074"
              linkGeode="https://geode-sdk.org/mods/dulak.auto_be_gone_fix"
            />
        </ul>
      </main>
      <Footer />
    </div>
  );
}
